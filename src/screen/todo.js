import React, { Component, PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

class TodoScreen extends PureComponent {
  _renderItem = ({ item: { activity } }) => <Text>{activity}</Text>;

  _listHeaderComponent = () => (
    <Button
      title={"add activity"}
      onPress={() => {
        this.props.addTodo("test");
      }}
    />
  );

  _keyExtractor = item => item.activity;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todo}
          renderItem={this._renderItem}
          ListHeaderComponent={this._listHeaderComponent}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ todo: { data } }) => ({
  todo: data
});

export default connect(
  mapStateToProps,
  {
    addTodo
  }
)(TodoScreen);
