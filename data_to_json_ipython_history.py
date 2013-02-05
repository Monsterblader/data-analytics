import xlrd
import csv
import json

path = '/Users/paulbacchus/Work/mckinsey_gp/data-analytics/data/'

wb = xlrd.open_workbook(path + 'data.xlsx')

for i in enumerate(wb.sheet_names()):
    print i

operation_costs = wb.sheet_by_index(0)
headcount = wb.sheet_by_index(1)
capacity = wb.sheet_by_index(2)
colleagues = wb.sheet_by_index(3)

operation_costs_rows = [operation_costs.row_values(i) for i in range(operation_costs.nrows)]

operation_costs_rows = [i for i in operation_costs_rows if i[0] != '']

for i in range(20, 33):
    operation_costs_rows[i] = operation_costs_rows[i][0:3]

BU_Breakdown_YTD = operation_costs_rows[0:10]

BU_Breakdown_Monthly = operation_costs_rows[10:20]

Group_Operations_Montly_Performance = operation_costs_rows[20:]

operation_costs_d = {}
operation_costs_d['BU_Breakdown_Monthly'] = {}
operation_costs_d['BU_Breakdown_YTD'] = {}
operation_costs_d['Group_Operations_Montly_Performance'] = {}

operation_costs_d['BU_Breakdown_Monthly']['headers'] = BU_Breakdown_Monthly[0]
operation_costs_d['BU_Breakdown_Monthly']['values'] = BU_Breakdown_Monthly[1:9]
operation_costs_d['BU_Breakdown_Monthly']['footer'] = BU_Breakdown_Monthly[-1]

operation_costs_d['BU_Breakdown_YTD']['headers'] = BU_Breakdown_YTD[0]
operation_costs_d['BU_Breakdown_YTD']['footer'] = BU_Breakdown_YTD[-1]
operation_costs_d['BU_Breakdown_YTD']['values'] = BU_Breakdown_YTD[1:9]

operation_costs_d['Group_Operations_Montly_Performance']['headers'] = Group_Operations_Montly_Performance[0]
operation_costs_d['Group_Operations_Montly_Performance']['values'] = Group_Operations_Montly_Performance[1:12]
operation_costs_d['Group_Operations_Montly_Performance']['footer'] = Group_Operations_Montly_Performance[-1]

for date in operation_costs_d['Group_Operations_Montly_Performance']['values']:
    date[0] = xlrd.xldate_as_tuple(date[0], 0)

with open(path + 'operations_costs.json', 'w') as f:
    f.write(json.dumps(operation_costs_d, sort_keys=True, indent=2, separators=(',', ': ')))

headcount_rows = [headcount.row_values(i) for i in range(headcount.nrows)]
headcount_rows = [i for i in headcount_rows if i[0] != '']

headcount_d = {
    'BU_Breakdown_YTD': {'headers': headcount_rows[0], 'values': headcount_rows[1:9], 'footer': headcount_rows[-1]},
    'BU_Breakdown_Monthly': {'headers': headcount_rows[10], 'values': headcount_rows[11:19], 'footer': headcount_rows[-1] }}

with open(path + 'headcount.json', 'w') as f:
    f.write(json.dumps(headcount_d, sort_keys=True, indent=2, separators=(',', ': ')))

capacity_rows = [capacity.row_values(i) for i in range(capacity.nrows)]

capacity_d = {'Availability': {'headers': capacity_rows[0][0:9], 'values': [row[0:9] for row in capacity_rows[1:]}, 'Utilization': {'headers': capacity_rows[0][11:], 'values': [row[10:] for row in capacity_rows[1:]]}}
cap_avail = [row[0:9] for row in capacity_rows[1:]]
cap_util = [row[11:] for row in capacity_rows[1:]]

for i in cap_avail:
    i[0] = xlrd.xldate_as_tuple(i[0], 0)

for i in cap_util:
    i[0] = xlrd.xldate_as_tuple(i[0], 0)

capacity_d = {'Availability': {'headers': capacity_rows[0][0:9], 'values': cap_avail}, 'Utilization': {'headers': capacity_rows[0][11:], 'values': cap_util}}

with open(path + 'Capacity.json', 'w') as f:
    f.write(json.dumps(capacity_d, sort_keys=True, indent=2, separators=(',', ': ')))

colleagues_rows = [colleagues.row_values(i) for i in range(colleagues.nrows)]

agree = [row[0:9] for row in colleagues_rows]

skill = [row[11:] for row in colleagues_rows]

skill = [i for i in skill if i[-1] != '']

skill2 = skill[0:3]
will2 = skill[3:]

skill2 = [i[1:] for i in skill2]

will2 = [i[1:] for i in will2]

colleagues_d = {
    'AGREE': {'headers': agree[1], 'values': agree[1:13], 'footer': [13]},
    'DISAGREE': {'headers': agree[16], 'values': agree[17:], 'footer': [28]},
    'Skill': skill2,
    'Will': will2
}

with open(path + 'Colleagues.json', 'w') as f:
    f.write(json.dumps(colleagues_d, sort_keys=True, indent=2, separators=(',', ': ')))