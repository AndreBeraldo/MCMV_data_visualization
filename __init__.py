from flask import Flask, render_template, flash, request, url_for, redirect, \
    session
from wtforms import Form
from wtforms import TextField, BooleanField, validators
from dbconnect import connection
import gc
import pandas as pd
from decimal import Decimal

app = Flask(__name__)
app.secret_key = '123'

def test_char(value):
    if type(value) is str:
        return True
    return False


def df_to_geojson(df, properties, lat='latitude', lon='longitude'):
    geojson = {'type': 'FeatureCollection', 'features': []}
    for _, row in df.iterrows():
        feature = {'type': 'Feature',
                   'properties': {},
                   'geometry': {'type': 'Point',
                                'coordinates': []}}
        feature['geometry']['coordinates'] = [float(row[lon]), float(row[lat])]
        for prop in properties:
            if prop == 'cidade':
                feature['properties'][prop] = row[prop]
            else:
                feature['properties'][prop] = float(row[prop])
        feature['properties']['icon'] = 'music'
        geojson['features'].append(feature)
    return geojson


class getValor(Form):
    valor = TextField('dado')


@app.route('/')
def plotAll():
    try:
        mycursor, mydb = connection()
        mycursor.execute('SELECT * from view_projects')
        data = mycursor.fetchall()
        mycursor.close()
        mydb.close()
        gc.collect()
        headers = ('longitude', 'latitude', 'cidade', 'unid_hab', 'invest')
        df_data = pd.DataFrame(data=data, columns = headers)
        cols = ['cidade', 'unid_hab', 'invest']
        geojson = df_to_geojson(df_data, cols)

        return render_template("map.html", geoJson=geojson)
    except Exception as e:
        return (str(e))


if __name__ == "__main__":
    app.run()
