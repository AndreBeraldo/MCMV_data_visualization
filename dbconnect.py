import mysql.connector

def connection():
	mydb = mysql.connector.connect(
		host="162.241.2.202",
		database="andredev_mcmv",
		user="andredev_mcmv",
		passwd="bancodados"
		)

	mycursor = mydb.cursor()
	return mycursor,mydb