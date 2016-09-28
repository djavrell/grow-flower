# linux and node on Galileo board

In this ticket, I'm gonna talk about 2 points
 * A full linux on the Galileo board
 * A node.js server to send the data
___
##### Full linux on Galileo board

To install a full linux on a Galileo board, it's not complicated, you juste need a SD card and a Linux ISO.
We can find some [tutorial][tuto-sd-linux] who explain how to install a linux on the galileo.

After get the linux on the board, we need some binding to read and use board's pins. For this, intel provide a devkit in different languages, it is call [mraa][mraa].

The interest to have a full linux on the Galileo is the posibility to create a web server and communicate in a esier way with a webUI

##### Node.js as a server


[mraa]: https://github.com/intel-iot-devkit/mraa
[api-maraa]: http://iotdk.intel.com/docs/master/mraa/node/
[tuto-sd-linux]: https://learn.sparkfun.com/tutorials/galileo-getting-started-guide/bigger-linux-image