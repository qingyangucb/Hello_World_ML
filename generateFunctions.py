import numpy as np

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
	# For this application directions will always have 4 
	# vectors.
    indexes = []
    
    for i in range(len(x)):
        x1 = x[i]
        y1 = y[i]

        angles = []
        for j in range(len(directions)):
            
            angle = angle_between([x1,y1],directions[j])
            angles.append(angle)

        minAngle = min(angles)
        index = angles.index(minAngle)

        indexes.append(index)
    indexes = np.asarray(indexes)

    return indexes

def generateThetas():
	# Generate the weight for each of the 4 neurons I am using.
	# e is epsilon which is the range to initialize thetas to
	# optimize performance.
    e = 0.40824
    trial = 2*np.random.rand(2,2)*e
    thetas = trial-e
    return thetas

def softmax(x):
    e_x = np.exp(x - np.max(x))
    return (e_x / e_x.sum())

def generateSamples(size):
	# generate a list of x, y points with length size.
    x = 10*(2*np.random.rand(size)-1)
    y = 10*(2*np.random.rand(size)-1)
    return x,y