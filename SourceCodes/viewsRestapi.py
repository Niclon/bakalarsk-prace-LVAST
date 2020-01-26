# views.py

@api_view(["GET"])
def dataStored(request, fileId):
    try:
        finalFileName = "datastorage\\LidarData_" + str(fileId) + ".json"
        with open(finalFileName) as json_file:
            data = json.load(json_file)                                                                    
            resp = JsonResponse(data, safe=False)
            return resp
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)
