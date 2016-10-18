#include <SPI.h>
#include <Ethernet.h>


byte mac[] = {
  0x98, 0x4F, 0xEE, 0x01, 0x2E, 0x8A
};
//IPAddress ip(192, 168, 1, 177);
EthernetServer server(80);

const int HUMID_ANALOG = 1;
const int TEMP_ANALOG = 2;
const int LIGHT_ANALOG = 3;
float Tt[]  = { 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130 };
float ADC[] = { 264.5701522, 360.4309136, 461.8561526, 560.4998351, 649.7971853, 726.1798523, 788.8541671, 838.8471536, 878.0327289, 908.4611383, 932.0074389, 950.2393976, 964.4040775, 975.4657178 };


int get_min_id(float adc) {
  for (int i = 0; i < 13; ++i) {
    if (ADC[i] > adc)
      return i - 1;
  }
  return -1;
}

float calc_temp(float adc) {
  int A0 = get_min_id(adc);

  if (A0 == -1)
    return -1.0;
  return (((adc - ADC[A0]) / (ADC[A0 + 1] - ADC[A0])) * (Tt[A0 + 1] - Tt[A0])) + Tt[A0];
}

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ;
  }


  Ethernet.begin(mac);//, ip);
  server.begin();
  Serial.print("server is at ");
  Serial.println(Ethernet.localIP());  
}

void loop() { 
   EthernetClient client = server.available();
  if (client) {
    Serial.println("new client");
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        if (c == '\n' && currentLineIsBlank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close"); 
          client.println("Refresh: 5");  
          client.println();
          int temperature = calc_temp((float)analogRead(TEMP_ANALOG));
          int light = (float)analogRead(LIGHT_ANALOG) /1.2;
          int humidity = analogRead(HUMID_ANALOG);
          client.print("[");
          client.print(humidity);
          client.print(",");
          client.print(temperature);
          client.print(",");
          client.print(light);
          client.print("]");
          break;
        }
        if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }
    // give the web browser time to receive the data
    delay(1);
    // close the connection:
    client.stop();
    Serial.println("client disconnected");
  }
  delay(100);
}
