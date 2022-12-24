import http.server
import socketserver

PORT = 8002
HOST = ""

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((HOST, PORT), handler) as httpd:
    print("Server started at "+HOST+":" + str(PORT))
    httpd.serve_forever()