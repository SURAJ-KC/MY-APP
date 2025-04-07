from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from keras.saving import load_model
from PIL import Image, ImageOps
from PIL import Image
import numpy as np
from io import BytesIO
import json


buffer  = BytesIO()

    # Load the model

model = json.loads('keras.h5')
print(mode)
# skin_model = load_model("keras_model.h5", compile=False,safe_mode=False)
# plant_model = load_model("plant_keras_model.h5",compile=False)

# Load the labels
skin_class_names = open("labels.txt", "r").readlines()
# plant_class_names = open("plant_labels.txt", "r").readlines()




def predict(path):


    # Disable scientific notation for clarity
    np.set_printoptions(suppress=True)
    
    
    # Create the array of the right shape to feed into the keras model
    # The 'length' or number of images you can put into the array is
    # determined by the first position in the shape tuple, in this case 1
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    
    # Replace this with the path to your image
    image = Image.open(path).convert("RGB")
    
    # resizing the image to be at least 224x224 and then cropping from the center
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
    
    # turn the image into a numpy array
    image_array = np.asarray(image)
    
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    
    # Load the image into the array
    data[0] = normalized_image_array
    
    # Predicts the model
    prediction = skin_model.predict(data)
    index = np.argmax(prediction)
    class_name = skin_class_names[index]
    # confidence_score = prediction[0][index]
    
    return str(class_name).split()[-1]

    
def getData(request):
    if request.method == 'GET':
        return JsonResponse({"Data":"IN THE GET DATA VIEW"})
    

    
def image_upload(request):
    
    if request.method=='POST':
        image=request.FILES['image']
        
        res="DISEASE"
        
        return HttpResponse(f"<h1>DETECTED DISEASE : {res}</h1>")
    
    else:
        return HttpResponse(f"GET RESQUEST IN IMAGE UPLOAD")


    
    