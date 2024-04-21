#from roboflow import Roboflow
#import supervision as sv
#import cv2
from flask import Flask, jsonify, request
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient

app = Flask(__name__)
CORS(app)
@app.route("/")
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



