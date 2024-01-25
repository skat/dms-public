import xmlschema
from pprint import pprint
# import pandas as pd
# data = pd.read_excel('../../Clarifications/G4 - mandatory data elements 11.10.2023 (1) - Copy.xlsx')
# print(data.keys())

# elements = data.at[1, 'Data element/class name ']
# print(elements)

# xxx


schema_file = open('./G4_DMS_v0.1_copy.xsd')
schema = xmlschema.XMLSchema(schema_file)
pprint(schema.annotations)
# for xsd_component in schema.iter_components():
    # pprint(xsd_component)
