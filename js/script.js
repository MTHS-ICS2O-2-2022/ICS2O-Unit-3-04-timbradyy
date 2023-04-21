// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates volume of a sphere.
 */
function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  // process
  const celsius = (fahrenheit - 32) * 5/9


  // output
  document.getElementById("celsius").innerHTML = "Celsius is: " + celsius.toFixed(2) + " °C."
}
