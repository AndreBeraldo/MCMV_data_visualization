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

regioes = {
    'ac': 'norte',
    'al': 'nordeste',
    'ap': 'norte',
    'am': 'norte',
    'ba': 'nordeste',
    'ce': 'nordeste',
    'df': 'centro-oeste',
    'es': 'sudeste',
    'go': 'centro-oeste',
    'ma': 'nordeste',
    'mt': 'centro-oeste',
    'ms': 'centro-oeste',
    'mg': 'sudeste',
    'pa': 'norte',
    'pb': 'nordeste',
    'pr': 'sul',
    'pe': 'nordeste',
    'pi': 'nordeste',
    'rj': 'sudeste',
    'rn': 'nordeste',
    'rs': 'sul',
    'ro': 'norte',
    'rr': 'norte',
    'sc': 'sul',
    'sp': 'sudeste',
    'se': 'nordeste',
    'to': 'norte',

}


def df_to_geojson(df, properties, lat='latitude', lon='longitude'):
    geojson = {'type': 'FeatureCollection', 'features': []}
    for _, row in df.iterrows():
        feature = {'type': 'Feature',
                   'properties': {},
                   'geometry': {'type': 'Point',
                                'coordinates': []}}
        feature['geometry']['coordinates'] = [float(row[lon]), float(row[lat])]
        for prop in properties:
            if prop in ['estado', 'cidade', 'faixa']:
                feature['properties'][prop] = row[prop]
                if prop == 'estado':
                    feature['properties']['regiao'] = regioes.get(
                        str(row[prop]).lower())
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
        mycursor.execute('SELECT * from view_all')
        data = mycursor.fetchall()

        mycursor.close()
        mydb.close()
        gc.collect()
        headers = ('longitude', 'latitude', 'estado', 'cidade',
                   'faixa', 'unid_hab', 'invest', 'id')
        df_data = pd.DataFrame(data=data, columns=headers)
        cols = ['estado', 'cidade', 'faixa', 'unid_hab', 'invest']
        geojson = df_to_geojson(df_data, cols)

        return render_template("map.html", geoJson=geojson, getValor=data)
    except Exception as e:
        return (str(e))


if __name__ == "__main__":
    app.run()
