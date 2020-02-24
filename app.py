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

# ----------------------------------------------------------------------------
x = []
y = []
size = 0
thetas = np.random.rand(2,2)
directions = np.random.rand(2,2)
counter = 0


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/makeSamples/<sampleSize>/<thetas1x>/<thetas1y>/<thetas2x>/<thetas2y>/<D1x>/<D1y>/<D2x>/<D2y>")
def makeSamples(sampleSize, thetas1x,thetas1y,thetas2x,thetas2y,D1x,D1y,D2x,D2y):
	size = int(sampleSize)
	# directions = np.array([[D1x,D1y],[D2x,D2y]])
	x,y = generateSamples(size)
	
	print(directions)
	# print(type(x[99]))
	# print(y[99])
	thetas[0,0] = thetas1x
	thetas[0,1] = thetas1y
	thetas[1,0] = thetas2x
	thetas[1,1] = thetas2y
	print(thetas)
	delta, z, answers = trainOne(x[counter],y[counter],thetas,directions)
	print(delta)


	word = 'success'
	return jsonify(word)

# @app.route("/trainOne>")
# def trainOneRoute(thetas1x,thetas1y,thetas2x,thetas2y):
# 	thetas
	

# 	return jsonify(sampleSize)	


if __name__ == "__main__":
    app.run(debug=True)
