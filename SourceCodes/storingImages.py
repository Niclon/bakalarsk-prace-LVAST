def storeImageData(request):
    dictOfImages =json.loads(request.body)
    global pathForImages
    for one in dictOfImages:
        filename = pathForImages + one["key"]+".png"
        imgData = base64.b64decode( one["value"].partition(",")[2])
        with open(filename,'wb') as f:
            f.write(imgData)
    return JsonResponse({"success":"true"})
