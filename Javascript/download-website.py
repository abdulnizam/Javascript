

import urllib2

def download(url):
    response = urllib2.urlopen(url)
    webContent = response.read()
    # replace with all occurrences of "SAP" replaced by "Odoo"
    ReplacedContent = webContent.replace("SAP", "Odoo")
    file = open('newFile.html', 'w')
    file.write(ReplacedContent)
    file.close()
    return True

if __name__ == '__main__':
    url = 'http://www.sap.com/belgique/index.html'
    print(download(url))
