#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include "index.h"

#ifndef STASSID
#define STASSID "UPCD3E63E2"
#define STAPSK  "sV53jzKjwzsh"
#endif

const char *ssid = STASSID;
const char *password = STAPSK;

ESP8266WebServer server(80);

const int led = 2;

void handleRoot() {
 server.send(200, "text/html", "<h1>iSter servesp v.1</h1>");
}

void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 1);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.begin();
  Serial.println("HTTP server started");

 server.on("/", handleRoot);  

 server.on("/led/1", []() {
    server.send(200, "text/plain", "led is on");
     digitalWrite(led, 0);
    });
 server.on("/led/0", []() {
    server.send(200, "text/plain", "led is off");
     digitalWrite(led, 1);
    });
}

void loop(void) {
  server.handleClient();
}