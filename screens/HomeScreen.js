import * as React from 'react';
import { StyleSheet, AppRegistry, ScrollView, View, Text, StatusBar, Dimensions, ListView, TouchableHighlight, TextInput, ImageBackground, Image, FlatList } from 'react-native'
import { Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { TabView, SceneMap } from 'react-native-tab-view';
import MapView from 'react-native-maps';
import Fondotrabun from '../img/background.png'
import { arrayExpression } from '@babel/types';
import esteban from '../img/esteban.jpg'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createStackNavigator } from 'react-navigation-stack'






class HomeScreen extends React.Component {

      render() {
            return (
                  <Title style={styles.titulo}>Bienvenido a TrabünClass</Title>
            );
      }
}

class vistaInicio extends React.Component {
      // static navigationOptions = { title: 'Welcome', header: { visible:false } };
      static navigationOptions = {
            header: null,
      };

      render() {
            var { navigate } = this.props.navigation;
            return (
                  <ScrollView>
                        <Card>
                              <Card.Title
                                    title="Card Title"
                                    subtitle="Card Subtitle"
                              />
                              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                              <Card.Content>
                                    <Title>CHIKENRAP</Title>
                                    <Paragraph>Card content</Paragraph>
                              </Card.Content>
                              <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                              </Card.Actions>
                        </Card>
                        <Card>
                              <Card.Title
                                    title="Card Title"
                                    subtitle="Card Subtitle"
                              />
                              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                              <Card.Content>
                                    <Title>Card title</Title>
                                    <Paragraph>Card content</Paragraph>
                              </Card.Content>
                              <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                              </Card.Actions>
                        </Card>
                        <Card>
                              <Card.Title
                                    title="Card Title"
                                    subtitle="Card Subtitle"
                              />
                              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                              <Card.Content>
                                    <Title>Card title</Title>
                                    <Paragraph>Card content</Paragraph>
                              </Card.Content>
                              <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                              </Card.Actions>
                        </Card>
                        <Card>
                              <Card.Title
                                    title="Card Title"
                                    subtitle="Card Subtitle"
                              />
                              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                              <Card.Content>
                                    <Title>Card title</Title>
                                    <Paragraph>Card content</Paragraph>
                              </Card.Content>
                              <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                              </Card.Actions>
                        </Card>
                        <Card>
                              <Card.Title
                                    title="Card Title"
                                    subtitle="Card Subtitle"
                              />
                              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                              <Card.Content>
                                    <Title>Card title</Title>
                                    <Paragraph>Card content</Paragraph>
                              </Card.Content>
                              <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                              </Card.Actions>
                        </Card>
                  </ScrollView>
            )
      }
}

//CREACION DEl contenido de LAS TABVIEW
const tabDatos = () => (
      <View style={[tab.scene, { backgroundColor: '#069'}]} />
)
const tabGeneral = () => (
      <View style={[tab.scene, { backgroundColor: '#069' }]} />
)
const tabSocios = () => (
      <View style={[tab.container, { backgroundColor: '#960' }]} />
)
const tabAdm = () => (
      <View style={[tab.container, { backgroundColor: '#960'}]} />
)




//CLase hijo para la administracion del Usuario, sera impreso en la TabView de ADMINISTRACION

export class childComponent extends React.Component {
      
      constructor(){
            super()

            this.state = {
                  title: '',
                  subtitle: ''
                
            }
      }
      
      
      render (){
            return(
                 
                  
                  <ImageBackground source={Fondotrabun} style={styles.backgroundContainer}>
                  <ScrollView>
                  <Card style={styles.tarjeta}>
                  <Card.Content style={styles.contenido}>
                  <Title style={styles.titulo}>Ingrese sus Datos</Title>
                  <View>
                        
                        <TextInput
                              style={styles.input}
                              placeholder="Rut"
                              value={this.state.Rut}
                        />
                        <TextInput
                              style={styles.input}
                              placeholder="Nombre"
                              value={this.state.Nombre}
                        />
                        <TextInput
                              style={styles.input}
                              placeholder="Ingrese Carrera o Área"
                              value={this.state.Carrera}
                        />
            
                        <TextInput
                              style={styles.input}
                              placeholder="Ramos"
                              value={this.state.Ramos}
                        />

                        <Button
                              type="button"
                              onClick={this.handleAddShareholder}
                              className="small"
                        >
                        Agregar Ramo
                        </Button>
                        <TextInput
                              style={styles.input}
                              placeholder="Ramos de preferencia WEÑAAA"
                              value={this.state.Demanda}
                        />
                        <Button style={styles.boton}>
                              <Text style={styles.texto}>Enviar</Text>
                        </Button>
                        
                  </View>
                  </Card.Content>
                  </Card> 
                  </ScrollView>                      
                  </ImageBackground>
                  
            )
      }
}





//Clase hijo de perfil que sera impreso dentro de una TabView
      
export class hijoPeril extends React.Component {

      constructor (){
            super()
            this.state = {
                  title: '',
                  subtitle:''
            }
      }

      render (){
            return(
                  <ImageBackground source={Fondotrabun} style={styles.backgroundContainer}>
                  <ScrollView>
                  <Card style={styles.container2}>
                  <Title style={styles.titulo}>GENERAL</Title>
                        <View style={styles.item}>
                              <Text style={styles.titulo2}>ESTEBAN GUERRERO</Text>
                              <Image source={esteban} style ={styles.logo}></Image>

                              <View style={styles.texto}>
                              <Text>Nombre: Esteban Guerrero</Text>
                              <Text>Area: Mùsica e Informatica</Text>
                              <Text>Edad: 25 años</Text>
                              <Text>Universidad: Inacap La Serena</Text>
                              </View>
                              <Icon name="user-graduate" color='#4747d1' size={44} style={styles.icon}/>

                        </View>
                  
                  </Card>
                  
                  <Card style={styles.container2}>
                  <Title style={styles.titulo}>RAMOS MAS DEMANDADOS</Title>
                        <View style={styles.item}>
                              <Button
                                    type="button"
                                    onClick={this.handleAddShareholder}
                                    className="small"
                              >
                              tribun
                              </Button>
                        </View>
                  </Card>
                  
                  <Card style={styles.container2}>
                  <Title style={styles.titulo}>WEÑISIMA</Title>
                  <View style={styles.item}>
                  <Button
                              type="button"
                              onClick={this.handleAddShareholder}
                              className="small"
                        >
                        anvrosio
                        </Button>
                  </View>
                  </Card>
                  </ScrollView>
                  </ImageBackground>
            )
      }

}


//Clase padre de Perfil donde se encuentra la TabView quien sera la encargada de contener las clases hijos para cada parte del perfil

class vistaPerfil extends React.Component {
      state = {
            index: 0,
            routes: [
                  { key: 'General', title: 'General' },
                  { key: 'Datos', title: 'Datos Personales'},    
                  { key: 'Socios', title: 'Socios' },
                  { key: 'Adm', title: 'Administrar'}
            ],
      };

      render() {

            return (
                  //ESTO corresponde a la tabView, quien contendra los elementos del perfil por separado
                  <TabView
                  navigationState={this.state}
                  renderScene={
                        SceneMap({
                              //Se imprimen las clases en cada TabView
                              General: hijoPeril,
                              Socios: tabSocios,
                              Datos: tabDatos,
                              Adm: childComponent,
                        })
                  }
                  onIndexChange={index => this.setState({ index })}
                  initialLayout={{ width: Dimensions.get('window').width }}
                  style={tab.container} />
            
                  
            );
      }
      
}

class vistaMapa extends React.Component {
      static navigationOptions = {
            header: null,
      };
      render() {
            return (
                  <View style={mapa.container}>
                        <MapView
                              style={mapa.map}
                              region={{
                                    latitude: -28.574818,
                                    longitude: -70.761574,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                              }}
                        >
                        </MapView>
                  </View>
            )
      }
}
class vistaBuscar extends React.Component {
      state = {
            firstQuery: '',
      };

      render() {
            const { firstQuery } = this.state;
            return (
                  <Searchbar
                        placeholder="Search"
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={firstQuery}
                  />
            )
      }
}
class vistaPrueba extends React.Component {

      constructor(){
            super()

            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

            this.state = {
                  dataSource: ds.cloneWithRows([])
            }
      }

      componentDidMount(){
            fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                  var movies = responseJson.movies;
                  for(var i = 0; i <movies.length; i++){
                        arrayExpression.push(movies[i].title);
                  }
                  this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(array)
                  })
            })
      }
      render() {
            return (
                  <View style={styles.container}>
                        <ListView
                              enableEmptySections={true}
                              dataSource={this.state.dataSource}
                              renderRow={this.renderRow}
                        />
                  </View>
           );
      }
      renderRow(dataRow){
            return <TouchableHighlight>
            <View>
                  <Text>
                        {dataRow}
                  </Text>
            </View>
            </TouchableHighlight>
      }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<IncorporationForm />, rootElement);

export default createMaterialBottomTabNavigator({
      HomeScreen: { screen: HomeScreen },
      Inicio: {
            screen: vistaInicio,
            navigationOptions: {
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ tintColor }) => (
                        <Icon name="home" color={tintColor} size={24} />
                  )
            }
      },
      Pollo: {
            screen: vistaPerfil,
            navigationOptions: {
                  tabBarLabel: 'Perfil',
                  tabBarIcon: ({ tintColor }) => (
                        <Icon name="user" color={tintColor} size={24} />
                  )
            }
      },
      Mapa: {
            screen: vistaMapa,
            navigationOptions: {
                  tabBarLabel: 'Mapa',
                  tabBarIcon: ({ tintColor }) => (
                        <Icon name="map-marker" color={tintColor} size={24} />
                  )
            }
      },
      Buscar: {   
            screen: vistaBuscar,
            navigationOptions: {
                  tabBarLabel: 'Buscar',
                  tabBarIcon: ({ tintColor }) => (
                        <Icon name="search" color={tintColor} size={24} />
                  )
            }
      },
      Prueba: {
            screen: vistaPrueba,
            navigationOptions: {
                  tabBarLabel: 'Prueba',
                  tabBarIcon: ({ tintColor }) => (
                        <Icon name="home" color={tintColor} size={24} />
                  )
            }
      }
}, {
            initialRouteName: 'Inicio',
            order: ['Inicio', 'Buscar', 'Mapa', 'Pollo','Prueba'],
            activeTintColor: '#706F6F',

            barStyle: { backgroundColor: '#562583' },
      })


const styles = StyleSheet.create({
      container5: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            paddingTop: 50
          },
          welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
          },
          instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
          },
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
      },
      //CSS del contenedor de los elementos del perfil general
      //listo
            container2: {
            flex: 1,
            marginVertical: 20,
            backgroundColor: '#E9F7FF',
      },

      scene: {
        flex: 1,
      },

      //listo
      input: {
            flex: 0,
          height: 50,
          width: 240,
          justifyContent: 'center',
          alignItems: 'stretch',
          marginBottom: 15,
          borderRadius: 15,
          borderColor: '#ccc',
          borderWidth: 2,
          backgroundColor: '#ccc',
          // overflow:"hidden",
      },
      //listo
      boton: {
            width: 200,
            marginBottom: 15,
            borderRadius: 25,
            backgroundColor: '#562583',
            
      },
      //listo
      logo: {
            flex: 0,
            width: 120,
            height: 120,
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginBottom: 20,
            borderRadius: 45,
            left: 100,
            bottom:10,
            
            
      },
      texto: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
      },
      backgroundContainer: {
            flex: 1,
            width: null,
            height: null,
            justifyContent: 'center',
            alignItems: 'center',
      },
      tarjeta: {
            flex: 0,
            width: 300,
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            
      },
     
      icon: {
            marginTop: 5,
            marginLeft: 5,
            position: 'absolute',
            left: 2, // Keep some space between your left border and Image
            top: 10,
      },

      contenido: {
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
      },
      titulo: {
            height: 50,
            justifyContent: 'center',
            left: 120,
            top: 12,
            fontFamily: 'sans-serif-condensed',
      },
      //tITULO PARA NOMBRE DE USUARIO
      titulo2: {
            height: 50,
            justifyContent: 'center',
            right: 50,
            top: 60,
            fontFamily: 'sans-serif-condensed',
      },
      texto: {
            height: 50,
            justifyContent: 'center',
            right: 50,
            bottom: 50,
            fontFamily: 'sans-serif-condensed',
      },

      container20: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          },
          gauge: {
            position: 'absolute',
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          },
          gaugeText: {
            backgroundColor: 'transparent',
            color: '#000',
            fontSize: 24,
          },


      //Estilo de los "grid" del perfil general
      item: {
            backgroundColor: '#9B7EB8',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            width: 350,
            height: 200,
            //height: Dimensions.get('window').width / numColumns,
      }

});

const mapa = StyleSheet.create({
      container: {
            ...StyleSheet.absoluteFillObject,
            height: 600,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
      },
      map: {
            ...StyleSheet.absoluteFillObject,
      },
});

const tab = StyleSheet.create({
      container: {
        marginTop: StatusBar.currentHeight
      },
      scene: {
        flex: 1,
      },
});
