import json

try:
    fileIndex = 0
    while True:
        vv.gotoNext()
        cloudinfo = vv.getReader().GetClientSideObject().GetOutput()
        points = cloudinfo.GetPoints()
        data = {}
        for i in range(0, cloudinfo.GetNumberOfPoints()):
            data[i] = points.GetPoint(i)
        path = 'C:\\Users\\MSI\\PycharmProjects\\bc\\datastorage\\data-standing'
        fileName = "\\LidarData_" + str(fileIndex) + ".json"
        with open(path + fileName, 'w') as outfile:
            json.dump(data, outfile)
        fileIndex += 1
except:
    print("Loop ended or it threw exception.")
