""" Json Generator """

import csv
import json
from collections import defaultdict

data1, data2, data3, data4 = [], [], [], []
saarc_population = defaultdict(float)


ASEAN = ['Brunei Darussalam', 'Cambodia',
         'Indonesia', "Lao People's Democratic Republic",
         'Malaysia', 'Myanmar', 'Philippines', 'Singapore',
         'Thailand',  'Viet Nam']

SAARC = ['Afghanistan', 'Bangladesh', 'Bhutan',
         'India', 'Maldives', 'Nepal', 'Pakistan',  'Sri Lanka']


def json_generator():
    """ This function generates json file for all four parts. """

    count = 0
    populations = []

    with open('population-estimates_csv.csv', "r") as csv_file:
        csv_reader = list(csv.reader(csv_file))

        # global count
        # global li
        for region, _, year, population in csv_reader[1:]:

            if region == "India":
                data1.append([year, float(population)])

            if year == "2014" and (region in ASEAN):
                data2.append([region, float(population)])

            if region in SAARC:
                saarc_population[year] += float(population)

            if (region in ASEAN) and (int(year) in range(2004, 2015)):
                if count == 0:
                    countryname = region
                    count = 1
                    populations.append(float(population))
                else:
                    count = count+1
                    populations.append(float(population))
                    if count == 11:
                        data4.append({"name": countryname, "data": populations})
                        count = 0
                        populations = []

        for year, population in saarc_population.items():
            data3.append([year, float(population)])

    with open("JSON/part1.json", "w") as json_file1:
        json.dump(data1, json_file1, indent=4)
    with open("JSON/part2.json", "w") as json_file2:
        json.dump(data2, json_file2, indent=4)
    with open("JSON/part3.json", "w") as json_file3:
        json.dump(data3, json_file3, indent=4)
    with open("JSON/part4.json", "w") as json_file4:
        json.dump(data4, json_file4, indent=4)
