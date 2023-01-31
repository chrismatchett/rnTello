import  React, {useRef, useState} from  'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Pressable, Image, Text, TextInput, View, Animated} from  'react-native';
import  Tello  from  'rn-dji-tello';

const  App = () => {
  const [init, setInit] = useState(false);
  const  drone = useRef<Tello>();

  const  onInit = () => {
    try {
      drone.current = new Tello();
      drone.current.on('connection', () => {
       setInit(true);
       console.log('Connected to drone');
      });

      drone.current.on('state', state  => {
        //console.log('Received State > ', state);
      });

      drone.current.on('send', (err, length) => {
        if (err) {
          console.log('error', err);
        }
        console.log(`Sent command is ${length} long`);
      });

      drone.current.on('message', message  => {
        console.log('Recieved Message > ', message);
      });
 
    } catch (error) {

      console.error(error);
      setInit(false);
    }
  };

  const  run = async () => {
    await  drone.current?.send('takeoff');
    await  drone.current?.send('battery?');
    await  drone.current?.send('land');
  };

  // Philip

  const animatedA = new Animated.Value(1);
  const animatedB = new Animated.Value(1);
  const animatedC = new Animated.Value(1);
  const animatedD = new Animated.Value(1);
  const animatedE = new Animated.Value(1);
  const animatedF = new Animated.Value(1);
  const animatedG = new Animated.Value(1);
  const animatedH = new Animated.Value(1);
  const animatedI = new Animated.Value(1);
  const animatedJ = new Animated.Value(1);
  const fadeInA = () => {
      Animated.timing(animatedA, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInB = () => {
      Animated.timing(animatedB, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInC = () => {
      Animated.timing(animatedC, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInD = () => {
      Animated.timing(animatedD, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInE = () => {
      Animated.timing(animatedE, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInF = () => {
      Animated.timing(animatedF, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInG = () => {
      Animated.timing(animatedG, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInH = () => {
      Animated.timing(animatedH, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  const fadeInI = () => {
      Animated.timing(animatedI, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }; 
  const fadeInJ = () => {
      Animated.timing(animatedJ, {
        toValue: 0.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }; 

    const takeoff = async () => {
      await  drone.current?.send('battery?')
      await  drone.current?.send('takeoff')
    };
    const forward = async () => {
      await  drone.current?.send('forward', {value:100})
    };
    const back = async () => {
      await  drone.current?.send('back', {value:100})
    };
    const land = async () => {
      await  drone.current?.send('land')
    };


  return (

      

        <View style={{ flex: 1 }}>
          <StatusBar  barStyle="light-content"  />

        <View>
          <Button  title="Run"  disabled={!init}  onPress={run}  />
          <Button  title="Init"  disabled={init}  onPress={onInit}  />
        </View>

          <View style={styles.container1}>
            <Text style={styles.heading1}>IP Connection Working on:</Text>
            <View style={styles.button}>
              <Text style={styles.textbox}>IPAddress</Text>
            </View>
          </View> 

          <View style={styles.container2}>

            <View style={styles.control3}>
              <Pressable onPressIn={forward} onPressOut={() => forward}>
                <Animated.View
                  style={{
                    opacity: animatedA,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70,
                    width: 100,
                    marginLeft: 25,
                    marginRight: 25,
                    borderRadius: 25,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Forward </Text>
                  </View>
                </Animated.View>
              </Pressable> 
            </View>

            <View style={styles.control3}>
            <Pressable onPressIn={back} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedB,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70,
                    width: 100,
                    marginLeft: 25,
                    marginRight: 25,
                    borderRadius: 25,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Backward </Text>
                  </View>
                </Animated.View>
              </Pressable> 
            </View>
          </View>

          <View style={styles.container3}>
            <View style={styles.control1}>
            <Pressable onPressIn={fadeInA} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedC,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 90,
                    width: 80,
                    marginLeft: 6,
                    marginRight: 6,
                    borderRadius: 25,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Left </Text>
                  </View>
                </Animated.View>
              </Pressable> 
            </View>

            <View style={styles.control2}>
            <Pressable onPressIn={fadeInA} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedD,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70,
                    width: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 28,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Turn </Text>
                  <Text style={styles.controltext}> Left </Text>
                  </View>
                </Animated.View>
              </Pressable> 
            </View>

            <View style={styles.control2}>
            <Pressable onPressIn={fadeInA} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedE,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70,
                    width: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 28,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Turn </Text>
                  <Text style={styles.controltext}> Right </Text>
                  </View>
                </Animated.View>
              </Pressable>      
            </View>

            <View style={styles.control1}>
            <Pressable onPressIn={fadeInA} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedF,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 90,
                    width: 80,
                    marginLeft: 6,
                    marginRight: 6,
                    borderRadius: 25,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Right </Text>
                  </View>
                </Animated.View>
              </Pressable> 
            </View>
          </View>

          <View style={styles.container4}>
            <View style={styles.control3}>
            <Pressable onPressIn={fadeInA} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedG,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70,
                    width: 100,
                    marginLeft: 25,
                    marginRight: 25,
                    borderRadius: 25,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Up </Text>
                  </View>
                </Animated.View>
              </Pressable>   
            </View>

            <View style={styles.control3}>
            <Pressable onPressIn={fadeInA} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedH,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70,
                    width: 100,
                    marginLeft: 25,
                    marginRight: 25,
                    borderRadius: 25,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Down </Text>
                  </View>
                </Animated.View>
              </Pressable>        
            </View>
          </View>

          <View style={styles.container5}>
            <View style={styles.control4}>
            <Pressable onPressIn={takeoff} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedI,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 60,
                    width: 170,
                    marginLeft: 15,
                    marginRight: 15,
                    borderRadius: 8,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                    
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Take </Text>
                  <Text style={styles.controltext}> Off </Text>
                  </View>
                </Animated.View>
              </Pressable>   
            </View>

            <View style={styles.control4}>
            <Pressable onPressIn={land} onPressOut={() => run}>
                <Animated.View
                  style={{
                    opacity: animatedJ,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 60,
                    width: 170,
                    marginLeft: 15,
                    marginRight: 15,
                    borderRadius: 8,
                    backgroundColor: 'lightblue',
                    borderWidth: 3,
                    borderColor: "darkslategrey",
                    
                  }}
                >
                  <View>
                  <Text style={styles.controltext}> Land </Text>
                  </View>
                </Animated.View>
              </Pressable>             
            </View>   
          </View>

          <View style={styles.container6}>
          <Pressable onPressIn={fadeInA} onPressOut={() => run}>  
                    <View>
                      <View style={styles.button2}>
                      <Text style={styles.button2text}> Return to Home </Text>
                      </View>
                    </View>
            </Pressable>
          </View>

        </View>

  );

};

const styles = StyleSheet.create({
  container1: {
    flex: 3,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  container2: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    paddingTop: 40,
  },
  container3: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 10,
  },
  container4: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
  },
  container5: {
    flex: 3,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white"
  },
  container6: {
    flex: 2,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 210,
    marginBottom: 120,
    borderRadius: 8,
    backgroundColor: 'lightgreen',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 210,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: 'grey',
  },
  button2text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button5A: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  textbox: {
    height: 50,
    width: 210,
    paddingTop: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  heading1: {
    flexDirection: "column",
    marginBottom: 10,
    alignItems: "center",
    fontSize: 14,
  },
  spacer: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  control1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 80,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  controltext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  control2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 28,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  control3: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 100,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  control4: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 170,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
    marginTop: 40,
  },
});

export default App;