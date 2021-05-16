# MyMoney geektrust.in challenge
Solution for geektrust.in MyMoney backend challenge

## Requirements

-   Node
-   npm or yarn

## Instructions

-   Run `npm install` or `yarn install`
-   Run `yarn local` to test locally which reads input form sample_in.txt

## Problem Statement

All Geektrust challenges are meant to be solved offline. Your score will be determined based on factors such as OOPS, readability, and scalability.

You should read [what we look for](https://help.geektrust.in/article/28-badges-to-earn) in your solution before you start coding. It is NOT about just getting the right output.

Please go through the build instructions [here](https://github.com/geektrust/coding-problem-artefacts)

#### The challenge

Train A and Train B are two limited stop super fast trains that travel from Chennai to New Delhi and Trivandrum to Guwahati.

The uniqueness of these trains are that for some part of the journey they follow the same route and travel as one train - Train AB. Also passengers can board this train only at the source stations, but they can get down at any station enroute.

There are only reserved bogies and each bogie will only have passengers to a specific station. When the train arrives in the station enroute, instead of waiting for the passengers to get down, the entire bogie is removed from the train, and the train continues its journey.

These train’s reservation systems are designed in a unique way where Train A can have passengers in the route for Train B and vice versa. For e.g. people can board from Chennai in Train A and travel to Guwahati.

Trains start from their respective source stations and meet at Hyderabad on Wednesdays every week at exactly the same time and travel till Bhopal as a single train, from where it again travels as two independent trains.

At Hyderabad both trains are merged as single train, Train AB. However the merging is done based on the distance each remaining bogie in both the trains has to travel. First both the engines are attached and then the bogies are attached in the descending order of distances they have to travel further from Hyderabad. This is done so that the last bogie can be immediately detached at the respective stations and the train can continue its journey quickly.

The routes and distances of each train are as given. Station codes can be used for ease of inputs and outputs. The distances are also given.


| Train A | Train B |
| ------- | ------- |
| STATION (CODE) - DISTANCE | STATION (CODE) - DISTANCE |
| CHENNAI (CHN) - 0<br>SALEM (SLM) - 350<br>BANGALORE (BLR) - 550<br>KURNOOL (KRN) - 900<br>HYDERABAD (HYB) - 1200<br>NAGPUR (NGP) - 1600<br>ITARSI (ITJ) - 1900<br>BHOPAL (BPL) - 2000<br>AGRA (AGA) - 2500<br>NEW DELHI (NDL) - 2700<br> | TRIVANDRUM (TVC) - 0<br/>SHORANUR (SRR) - 300<br>MANGALORE (MAQ) - 600<br>MADGAON (MAO) - 1000<br>PUNE (PNE) - 1400<br>HYDERABAD (HYB) - 2000<br>NAGPUR (NGP) - 2400<br>ITARSI (ITJ) - 2700<br>BHOPAL (BPL) - 2800<br>PATNA (PTA) - 3800<br>NEW JALPAIGURI (NJP) - 4200<br>GUWAHATI (GHY) - 4700<br> |

Given initial bogie order of both trains your program should print the bogie order of arrival of each train at Hyderabad, Train AB’s departure bogie order from Hyderabad.


#### Your program should take as input:

1. The order of bogies for train A while departing from Chennai.
2. The order of bogies for train B while departing from Trivandrum.

#### The output should be:

1. The order of bogies for train A while arriving at Hyderabad.
2. The order of bogies for train B while arriving at Hyderabad.
3. The order of bogies for train AB (merged train) while departing from Hyderabad.


#### Input Commands

There are 2 input commands defined to separate out the actions. Your input format will start with either of these commands i.e TRAIN_A, TRAIN_B

##### TRAIN_A

The TRAIN_A command receives the initial order of bogies (seperated by space) for train A while departing from Chennai.

Format - TRAIN_A ENGINE BOGIE_1 BOGIE_2 BOGIE_3 ... BOGIE_N
Example- TRAIN_A ENGINE NDL NDL KRN GHY SLM NJP NGP BLR

##### TRAIN_B

The TRAIN_B command receives the initial order of bogies (seperated by space) for train B while departing from Trivandrum.

Format - TRAIN_B ENGINE BOGIE_1 BOGIE_2 BOGIE_3 ... BOGIE_N
Example- TRAIN_B ENGINE NJP GHY AGA PNE MAO BPL PTA


#### Assumptions

1. The passengers board only from the source station.

2. If there are no passenger bogies to travel from Hyderabad station, then train should stop there (Need to output differently).

3. The distances are in Kilometers.

3. If there are multiple bogies with same station as its destination, then they can be arranged next to each other when the Train AB leaves Hyderabad.


#### SAMPLE INPUT-OUTPUT 1

##### INPUT:
TRAIN_A ENGINE NDL NDL KRN GHY SLM NJP NGP BLR
TRAIN_B ENGINE NJP GHY AGA PNE MAO BPL PTA


##### OUTPUT:
ARRIVAL TRAIN_A ENGINE NDL NDL GHY NJP NGP
ARRIVAL TRAIN_B ENGINE NJP GHY AGA BPL PTA
DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP


#### SAMPLE INPUT-OUTPUT 2

##### INPUT:
TRAIN_A ENGINE SLM BLR KRN HYB SLM NGP ITJ
TRAIN_B ENGINE SRR MAO NJP PNE PTA


##### OUTPUT:
ARRIVAL TRAIN_A ENGINE HYB NGP ITJ
ARRIVAL TRAIN_B ENGINE NJP PTA
DEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA ITJ NGP


Take a look at [Geektrust help docs](https://help.geektrust.in/article/28-badges-to-earn) for guidance on how to write code that will companies interested in you. All the best!

You should read [what we look for](https://help.geektrust.in/category/22-backend) in your solution before you start coding.

Make sure you have read through the [build instructions](https://github.com/geektrust/coding-problem-artefacts) as well before submitting your code.