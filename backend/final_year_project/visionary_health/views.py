from django.http import HttpResponse,JsonResponse
from PIL import Image
import json
from inference_sdk import InferenceHTTPClient
from django.views.decorators.csrf import csrf_exempt
from google import genai
import re


API_KEY = "AIzaSyAqbGSGeFGWoINax_s1Yrqvy8ogHDI5kT4"

genai_model = genai.Client(api_key=API_KEY)

CLIENT = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key="gU3WykiLcBJXjp3p2VCI"
)


def prompt_based(text):

    prompt = f"""
    You are a medical consultant AI. Based on the following user input, generate a JSON-formatted response strictly containing structured details about the disease.
    User Input: {text}
    
    Instructions:
    1. Identify the specific disease based in the user input.
    2. Respond ONLY with a valid JSON object (as a string) including the following keys:
    - "disease_name"
    - "overview"
    - "cause"
    - "cure"
    - "precautions"
    - "medications"
    - "consultations"
    3. Do NOT include any text outside the JSON (no explanations, no markdown).
    4. Keep the values concise, medically accurate, and user-friendly.

    Output strictly in raw JSON format only.
    """


    response = genai_model.models.generate_content(
    model="gemini-2.0-flash",
    contents=prompt,
    )

    return response



def get_details(prediction,category):

    prompt = f"""
        You are a medical consultant AI. Based on the following input, generate a JSON-formatted response strictly containing structured details about the disease.

        Input:
        - Detected disease: {prediction}
        - Category: {category} (e.g., Human or Plant)

        Instructions:
        1. Identify the specific disease class based on the category and disease name.
        2. Respond ONLY with a valid JSON object (as a string) including the following keys:
        - "disease_name"
        - "overview"
        - "cause"
        - "cure"
        - "precautions"
        - "medications"
        - "consultations"
        3. Do NOT include any text outside the JSON (no explanations, no markdown).
        4. Keep the values concise, medically accurate, and user-friendly.

        Output strictly in raw JSON format only.
    """


    response = genai_model.models.generate_content(
    model="gemini-2.0-flash",
    contents=prompt,
    )

    return response
    


@csrf_exempt
def prompt_upload(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body.decode('utf-8'))
            text = body.get('prompt') 

            if not text:
                return JsonResponse({'error': 'No prompt provided'}, status=400)

            details = prompt_based(text)
            details = details.candidates[0].content.parts[0].text

            json_text = re.search(r"```json\n(.*?)\n```", details, re.DOTALL)

            if json_text:
                json_str = json_text.group(1)
                details = json.loads(json_str)
            else:
                details = {"ERROR":"Error while parsing the json"}

            print("DETAILS:\n", details)
            return JsonResponse(details)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return HttpResponse("GET REQUEST IN PROMPT ROUTE")



@csrf_exempt
def image_upload(request):
    
    if request.method=='POST':  
        image=request.FILES['image']
        category = request.POST.get('category')
        img = Image.open(image)
        print("CATEGORY : \n",category)

        if category == "human_eyes":
            eye_result = CLIENT.infer(img, model_id="eye_diseases_detect/1")
            detected_class = eye_result['predictions'][0]['class']
    
            details = get_details(detected_class,category)
            details = details.candidates[0].content.parts[0].text  
            json_text = re.search(r"```json\n(.*?)\n```", details, re.DOTALL)


            if json_text:
                json_str = json_text.group(1)
                details = json.loads(json_str) 
            else:
                details = {"erorr":"Error occured"}

            print("DETAILS : \n",details)

            return JsonResponse(details)
            


        elif category == "human_skin":
            skin_result = CLIENT.infer(img, model_id="skin-disease-detetector/1")
            detected_class = skin_result["predictions"][0]["class"]
            details = get_details(detected_class,category)
            details = details.candidates[0].content.parts[0].text  
            json_text = re.search(r"```json\n(.*?)\n```", details, re.DOTALL)


            if json_text:
                json_str = json_text.group(1)
                details = json.loads(json_str) 
            else:
                details = {"erorr":"Error occured"}

            print("DETAILS : \n",details)

            return JsonResponse(details)

        elif category == "plant_leaf":
            potato_plant = CLIENT.infer(img, model_id="anomalie_detection5/1")
            detected_class = potato_plant["predictions"][0]["class"]
            details = get_details(detected_class,category)
            details = details.candidates[0].content.parts[0].text  
            json_text = re.search(r"```json\n(.*?)\n```", details, re.DOTALL)


            if json_text:
                json_str = json_text.group(1)
                details = json.loads(json_str) 
            else:
                details = {"erorr":"Error occured"}

            print("DETAILS : \n",details)
            return JsonResponse(details)


        elif category == "plant_rice":
            rice_result = CLIENT.infer(img, model_id="paddy-bc4ue/3")
            detected_class = rice_result["predictions"][0]["class"]
            details = get_details(detected_class,category)
            details = details.candidates[0].content.parts[0].text  
            json_text = re.search(r"```json\n(.*?)\n```", details, re.DOTALL)


            if json_text:
                json_str = json_text.group(1)
                details = json.loads(json_str) 
            else:
                details = {"erorr":"Error occured"}

            print("DETAILS : \n",details)

            return JsonResponse(details)


        
        return HttpResponse(f"<h1>DETECTED DISEASE : </h1>")
    
    else:
        return HttpResponse(f"GET RESQUEST IN IMAGE UPLOAD")


    
    