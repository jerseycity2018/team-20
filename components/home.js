export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          onPress={() => this.props.navigation.navigate('LogIn')}
          title="Log In"
        />
        <Button
          onPress={() => this.props.navigation.navigate('SignUp')}
          title="Sign Up"
        />
      </View>
    );
  }
}
