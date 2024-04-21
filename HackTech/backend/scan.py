#from roboflow import Roboflow
#import supervision as sv
#import cv2
from flask import Flask, jsonify, request
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient
import urllib.request

app = Flask(__name__)
CORS(app)

file_path = 'image.jpg'

@app.route("/upload", methods=["POST"])
def upload_image():

    print(f"Request URL: {request.url}")  # Log the request URL
    uri = request.data.decode("utf-8")
    print(uri[0:500])
    response = urllib.request.urlopen(uri)
    with open('image.jpg', 'wb') as f:
        f.write(response.file.read())
    #uri.save("uploaded.jpg")
    """
    print("something")
    jj = request.files
    print(jj)
    
    if "image" not in request.files:
        print("No image file provided")
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files["image"]

    if image_file.filename == "":
        print("No selected file")
        return jsonify({"error": "No selected file"}), 400

    if image_file:
        # Save the uploaded image file to a desired location
        image_file.save("uploaded-image.png")
    """
    return jsonify({"message": "Image uploaded successfully"}), 200
    
@app.route("/bite")
def bite():
    
    '''rf = Roboflow(api_key="qv6x4NNesbNtb88SH6sx")
    project = rf.workspace().project("insect-bites")
    model = project.version(1).model

    result = model.predict("bugbite.jpg", confidence=4, overlap=30).json()

    labels = [item["class"] for item in result["predictions"]]

    detections = sv.Detections.from_roboflow(result)

    label_annotator = sv.LabelAnnotator()
    box_annotator = sv.BoxAnnotator()

    image = cv2.imread("bugbite.jpg")

    annotated_image = box_annotator.annotate(
        scene=image, detections=detections)
    annotated_image = label_annotator.annotate(
        scene=annotated_image, detections=detections, labels=labels)
    print(detections.data['class_name'][0])
    #sv.plot_image(image=annotated_image, size=(16, 16))
    return {"data" : [detections.data['class_name'][i] for i in range(len(detections.data['class_name']))]}'''
    
    CLIENT = InferenceHTTPClient(
    api_url="https://classify.roboflow.com",
    api_key="FfleKWifdGwhsjXLXNdA"
    )

    result = CLIENT.infer('disease.jpeg', model_id="skin_disease_ak/1")
    
    return {"data": [result['predictions'][0]['class']]}
if __name__ == "__main__":
    app.run(debug=True)



