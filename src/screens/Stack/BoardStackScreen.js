import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
BoardListScreen,
BoardDetailScreen,
BoardCreateScreen,
BoardModifyScreen
} from "../";

const BoardStack = createStackNavigator();

export default MypageStackScreen = () => {
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen name="BoardList" component={BoardListScreen} />
      <BoardStack.Screen name="BoardDetail" component={BoardDetailScreen} />
      <BoardStack.Screen name="BoardCreate" component={BoardCreateScreen} />
      <BoardStack.Screen name="BoardModify" component={BoardModifyScreen} />
    </BoardStack.Navigator>
  );
}
