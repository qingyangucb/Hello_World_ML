import numpy as np
from scipy.special import softmax

def unit_vector(vector):
    # convert the input vector to unit vector
    return vector / np.linalg.norm(vector)



def angle_between(v1, v2):
	# find the angle between two vectors v1 and v2.
	v1_u = unit_vector(v1)
	v2_u = unit_vector(v2)
	return np.arccos(np.clip(np.dot(v1_u, v2_u), -1.0, 1.0))

def generateAnswer(x,y,directions):
	# find the correct direction lable for x,y samples by
	# finding the angle between the vector [x, y] and the
	# vectors provided in directions.
	# For this application directions will always have 2 
	# vectors.
	answers = []

	for i in range(len(x)):
		x1 = x[i]
		y1 = y[i]

		angles = []
		for j in range(len(directions)):
			angle = angle_between([x1,y1],directions[j])
			angles.append(angle)

			minAngle = min(angles)
			index = angles.index(minAngle)

		if index == 0:
			answer = [1,0]
		elif index == 1:
			answer = [0,1]
		answers.append(answer)
		# print(answers)

	answers = np.asarray(answers)

	return answers

def generateThetas():
	# Generate the weight for each of the 4 neurons I am using.
	# e is epsilon which is the range to initialize thetas to
	# optimize performance.
	e = 0.40824
	trial = 2*np.random.rand(2,2)*e
	thetas = trial-e
	return thetas

# def softmax(x):
# 	e_x = np.exp(x - np.max(x))
# 	return (e_x / e_x.sum())

def generateSamples(size):
	# generate a list of x, y points with length size.
	x = (2*np.random.rand(size)-1)/1.41421356237
	y = (2*np.random.rand(size)-1)/1.41421356237
	return x,y

def trainOne(x,y,thetas,directions):
	x = [x]
	y = [y]
	answers = generateAnswer(x,y,directions)
	xy = np.column_stack((x,y))
	z = np.matmul(xy, np.transpose(thetas))
	tempA = softmax(z)
	tempError = answers - tempA
	delta = np.outer(tempError,xy)

	return delta, tempA, tempError, answers

def trainEpoch(x,y,thetas,directions):
	delta = 0
	size = x.shape[0]
	answers = generateAnswer(x,y,directions)
	xy = np.column_stack((x,y))
	z = np.matmul(xy, np.transpose(thetas))
	for i in range(0, size):
		point = xy[i]
		tempA = softmax(z[i])
		tempAns = answers[i,:]
		tempError = tempAns - tempA
		delta += np.outer(tempError,point)
	


	return delta, z, answers

def testModel(x,y,thetas,directions):
	size = x.shape[0]
	answers = generateAnswer(x,y,directions)
	count = 0
	xy = np.column_stack((x,y))
	z = np.matmul(xy, np.transpose(thetas))

	for i in range(0, size):
		if np.argmax(z[i]) == np.argmax(answers[i]):
			count += 1

	return count/size
