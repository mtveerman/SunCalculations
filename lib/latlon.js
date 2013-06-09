/**
 * @author mtveerman
 * @version 0.1
 * @description Latitude Longitude related functions
 */

/*
How To Convert a Decimal to Sexagesimal
You'll often find degrees given in decimal degrees (121.135°) instead of the more common degrees, minutes, and seconds (121°8'6"). However, it's easy to convert from a decimal to the sexagesimal system.

Difficulty Level: average      Time Required: 5 minutes

Here's How:
The whole units of degrees will remain the same (i.e. in 121.135° longitude, start with 121°).
Multiply the decimal by 60 (i.e. .135 * 60 = 8.1).
The whole number becomes the minutes (8').
Take the remaining decimal and multiply by 60. (i.e. .1 * 60 = 6).
The resulting number becomes the seconds (6"). Seconds can remain as a decimal.
Take your three sets of numbers and put them together, using the symbols for degrees (°), minutes (‘), and seconds (") (i.e. 121°8'6" longitude) 
 */
