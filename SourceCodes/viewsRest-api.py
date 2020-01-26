# views.py

\@api\_view([\dq GET\dq])
def dataStored(request, fileId):
    try:
        finalFileName = \dq datastorage\\LidarData\_\dq  \+ str(fileId) \+ \dq.json\dq
        with open(finalFileName) as json\_file:
            data = json.load(json\_file)
            resp = JsonResponse(data, safe=False)
            return resp
    except ValueError as e:
        return Response(e.args[0],status.HTTP\_400\_BAD\_REQUEST)