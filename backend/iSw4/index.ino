#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <ArduinoJson.h>

#ifndef STASSID
#define STASSID "UPCD3E63E2"
#define STAPSK "sV53jzKjwzsh"
#endif

const char *ssid = STASSID;
const char *password = STAPSK;

ESP8266WebServer server(80);

const int switch1 = 16;
const int switch2 = 0;
const int switch3 = 5;
const int switch4 = 4;

void handleRoot()
{
    server.send(200, "text/html", "<h1>iSter servesp v.1</h1>");
}

void setup(void)
{

    //  Serial.begin(115200);
    //  while (!Serial) continue;
    //  StaticJsonDocument<200> doc;
    //  doc["type"] = "iSwitch";
    //  doc["name"] = "desk light";
    //  doc["ip"] = WiFi.localIP();
    //  serializeJson(doc, Serial);

    pinMode(switch1, OUTPUT);
    pinMode(switch2, OUTPUT);
    pinMode(switch3, OUTPUT);
    pinMode(switch4, OUTPUT);
    digitalWrite(switch1, 1);
    digitalWrite(switch2, 1);
    digitalWrite(switch3, 1);
    digitalWrite(switch4, 1);
    Serial.begin(115200);
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
    Serial.println("");

    while (WiFi.status() != WL_CONNECTED)
    {
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
    server.on("/s/1/1", []() {
        server.send(200, "text/plain", "switch 1 is on");
        digitalWrite(switch1, 0);
    });
    server.on("/s/1/0", []() {
        server.send(200, "text/plain", "switch 1 is off");
        digitalWrite(switch1, 1);
    });

    server.on("/s/2/1", []() {
        server.send(200, "text/plain", "switch 2 is on");
        digitalWrite(switch2, 0);
    });
    server.on("/s/2/0", []() {
        server.send(200, "text/plain", "switch 2 is off");
        digitalWrite(switch2, 1);
    });
    server.on("/s/3/1", []() {
        server.send(200, "text/plain", "switch 3 is on");
        digitalWrite(switch3, 0);
    });

    server.on("/s/3/0", []() {
        server.send(200, "text/plain", "switch 3 is off");
        digitalWrite(switch3, 1);
    });
    server.on("/s/4/1", []() {
        server.send(200, "text/plain", "switch 4 is on");
        digitalWrite(switch4, 0);
    });
    server.on("/s/4/0", []() {
        server.send(200, "text/plain", "switch 4 is off");
        digitalWrite(switch4, 1);
    });
    server.on("/s/a/1", []() {
        server.send(200, "text/plain", "all swiches on");
        digitalWrite(switch1, 0);
        digitalWrite(switch2, 0);
        digitalWrite(switch3, 0);
        digitalWrite(switch4, 0);
    });
    server.on("/s/a/0", []() {
        server.send(200, "text/plain", "all swiches off");
        digitalWrite(switch1, 1);
        digitalWrite(switch2, 2);
        digitalWrite(switch3, 3);
        digitalWrite(switch4, 4);
    });
}

void loop(void)
{
    server.handleClient();
}