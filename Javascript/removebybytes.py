
# Write a program to download the contents of http://www.sap.com/belgique/index.html 
# (the SAP homepage for Belgium), and then save the contents of the page to a new local file,
# with all occurrences of "SAP" replaced by "Odoo".

def _bytetoremove(byte):
    _file = open("sample-test.text", "rb")
    text = _file.read()
    newtext = ""
    for i, j in enumerate(text):
        if i % byte != 0 or i == 0:
            _file.write(j)
    _file.close()

    # copy to new file
    _file = open("sample-test1.text", "w")
    for i in newtext:
        _file.write(i)
    _file.close()


if __name__ == '__main__':
    how_many_bytes = 7
    _bytetoremove(how_many_bytes)
