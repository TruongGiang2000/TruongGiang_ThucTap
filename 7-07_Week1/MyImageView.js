import React, {Component} from 'react';
import {Image, ActivityIndicator, View, StyleSheet} from 'react-native';
export default class MyImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uriImage: props.uriImage,
      loading: false,
      defautSource: props.defautSource,
    };
  }
  check() {
    if (this.state.defautSource != null) {
      this.setState({
        loading: false,
      });
    } else {
      this.setState({
        loading: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ActivityIndicator animating={this.state.loading} size={100} />
        <Image
          source={{uri: this.state.uriImage}}
          onLoadStart={() => this.check()}
          onLoadEnd={() => this.setState({loading: false})}
          style={{width: this.props.size, height: this.props.size}}
          defaultSource={{uri: this.state.defautSource}}
          onError={() =>
            this.setState({
              uriImage:
                'https://www.hostingreviewbox.com/wp-content/uploads/2016/02/image-error.png',
            })
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
