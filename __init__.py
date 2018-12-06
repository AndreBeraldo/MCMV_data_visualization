from flask import Flask, render_template, flash, request, url_for, redirect, session
from wtforms import Form
from wtforms import TextField, BooleanField,validators
from dbconnect import connection
import gc

app = Flask(__name__)
app.secret_key = '123'

class getValor(Form):
	valor = TextField('dado')

@app.route('/')
def plotAll():
	try:
		mycursor,mydb = connection()
		mycursor.execute('SELECT LONGITUDE, LATITUDE, MUNICIPIO, UH, VALOR, PERCENTUAL  FROM PROJETOS2')
		data = mycursor.fetchall()
		mycursor.close()
		mydb.close()
		gc.collect()
		return render_template("map.html", getValor=data)
	except Exception as e:
		return(str(e))	
		

if __name__ == "__main__":
	app.run()
