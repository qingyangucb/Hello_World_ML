# import necessary libraries
from generateFunctions import generateSamples, generateAnswer, generateThetas
from generateFunctions import testModel, trainOne, trainEpoch
from scipy.special import softmax
import numpy as np
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

x = []
y = []
size = 0
thetas = np.random.rand(2,2)
directions = np.random.rand(2,2)
# counter = 0
# print(directions)
# print(type(directions[0][0]))

# ----------------------------------------------------------------------------



app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# Initiate variables with values passed by js.
@app.route("/makeSamples/<sampleSize>/<thetas1x>/<thetas1y>/<thetas2x>/<thetas2y>/<D1x>/<D1y>/<D2x>/<D2y>")
def makeSamples(sampleSize, thetas1x,thetas1y,thetas2x,thetas2y,D1x,D1y,D2x,D2y):
	global size, x, y, thetas, directions, counter
	size = int(sampleSize)
	# print(type(D1x))
	# D1x = np.array(D1x)
	# D1y = np.array(D1y)
	# D2x = np.array(D2x)
	# D2y = np.array(D2y)
	directions = np.array([[D1x,D1y],[D2x,D2y]])
	directions = directions.astype(np.float)
	x,y = generateSamples(size)
	
	print(directions)
	# print(type(x[99]))
	# print(y[99])
	thetas[0,0] = thetas1x
	thetas[0,1] = thetas1y
	thetas[1,0] = thetas2x
	thetas[1,1] = thetas2y
	# print(thetas)
	# delta, z, answers = trainOne(x[counter],y[counter],thetas,directions)
	# print(delta)
	counter = 0

	word = 'success'
	return jsonify(word)

@app.route("/trainOne")
def trainOneRoute():
	global counter, directions
	global thetas
	if counter == size:
		counter = 0
	print(f'counter {counter}')
	delta, tempA, tempError, answers = trainOne(x[counter],y[counter],thetas,directions)
	# deltaR = np.around(delta, decimals=2)
	# tempAR = np.around(tempA, decimals=2)
	# tempErrorR = np.around(tempError, decimals=2)
	# answersR = np.around(answers, decimals=2)
	# xR = np.around(x[counter], decimals=2)
	# yR = np.around(y[counter], decimals=2)
	
	thetas += delta
	delta = delta.tolist()
	tempError = tempError.tolist()
	tempA = tempA.tolist()
	answers = answers.tolist()
	results = [delta,tempA,tempError,answers,x[counter],y[counter]]
	counter += 1
	# print(thetas)
	# print('_____________________')
	# print(directions)
	# print('_____________________')

	return jsonify(results)	



@app.route("/trainAll")
def trainAllRoute():
	global counter, directions
	global thetas, x, y
	counter = 0
	delta, z, answers = trainEpoch(x,y,thetas,directions)
	# deltaR = np.around(delta, decimals=2)
	# tempAR = np.around(tempA, decimals=2)
	# tempErrorR = np.around(tempError, decimals=2)
	# answersR = np.around(answers, decimals=2)
	# xR = np.around(x[counter], decimals=2)
	# yR = np.around(y[counter], decimals=2)
	print('this is delta:')
	print(delta)
	
	thetas += delta
	delta = delta.tolist()

	# print(thetas)
	# print('_____________________')
	# print(directions)
	# print('_____________________')

	return jsonify(delta)	

@app.route("/accuracyOne/<thetas1x>/<thetas1y>/<thetas2x>/<thetas2y>/<D1x>/<D1y>/<D2x>/<D2y>")
def accuracyOne(thetas1x,thetas1y,thetas2x,thetas2y,D1x,D1y,D2x,D2y):
	global x, y
	directions = np.array([[D1x,D1y],[D2x,D2y]])
	directions = directions.astype(np.float)
	thetas = np.array([[thetas1x,thetas1y],[thetas2x,thetas2y]])
	thetas = thetas.astype(np.float)		
	accuracy = testModel(x,y,thetas,directions)
	return jsonify(accuracy)


if __name__ == "__main__":
    app.run(debug=True)
