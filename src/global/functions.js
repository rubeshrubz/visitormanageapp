import { EventRegister } from "react-native-event-listeners";
import {Animated} from "react-native";
import {AsyncStorage} from "react-native";
export default class Functions {
  static instance = null;

  /**
   * Create a singleton instance of the global functions class
   * @returns {null}
   */
  static getInstance() {
    if (Functions.instance == null) {
      Functions.instance = new Functions();
    }

    return this.instance;
  }

  ValidateEmail(mail) {
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) {
      return false;
    }
    return true;
  }

  ValidateText(text) {
    var textformat = /^(?:[A-Za-z]+|\d+)$/.test(value)
      ? 'block number'
      : 'block letter';
    if (text.match(textformat)) {
      return false;
    }
    return true;
  }
  textOnlyvalidate(evt) {
    var text = /^[a-zA-Z ]*$/;
    if (evt.match(text)) {
      return false;
    }
    return true;
  }
  PasswordValidate(evt){
    var text = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    if(evt.match(text)){
      return false;
    }
    return true
  }
  startShake(shakeAnimation) {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }
  /**
   * Determine the type
   * @param value
   * @returns {typeof}
   */
  isTypeOf(value) {
    if (Array.isArray(value)) return 'array';
    return value != null ? typeof value : null;
  }
  async setDetails(key,string){
    try {
      await AsyncStorage.setItem(key, string)
      console.log("hi==>",'Data successfully saved',)
    } catch (e) {
      alert('Failed to save the data to the storage')
   
  }
  
  }

  async clearDetails(){
  
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
     

}
  
  async getDetails(key) {
    return await AsyncStorage.getItem(key)
  }

  async reoveDetails(key) {
   return await AsyncStorage.removeItem(key, (err) => {
      //alert(err)
    });
  }
  /**
   * Convert a wifi signal to a percentage
   * @param value
   * @returns {number}
   */

  /**
   * Is Null or Empty
   * @param value
   * @returns {boolean}
   */
  isNullOrEmpty(value) {
    return value == null || value === '';
  }

  numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  NumberOnlyvalidate(evt) {
    return evt?.replace(/[^0-9]/g, '');
  }

  /**
   * Get a date object from milliseconds
   * @param ms
   * @returns {{s: *, d: *, h: *, m: *}}
   */

  /**
   * Format the date to a time
   * @param date
   * @returns {*}
   */

  /**
   * Generate a zlert
   */
  ShowAlert(message, type) {
    EventRegister.emit(global.event.openSnackbar, {
      type: type,
      message: message,
    });
  }
  /**
   * Generate a zlert
   */
  HideAlert() {
    EventRegister.emit(global.event.closeSnackbar, {});
  }
  /**
   * Capitalize the first letter of a string
   * @param string
   * @returns string
   */
  capitalizeFirstLetter(string) {
    if (string !== null && string !== '') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  }

  /**
   * Check to see if two strings match
   * @param a a string
   * @param b another string
   * @param caseInsensitive a boolean, case sensitive comparison or not, default false
   * @returns {boolean}
   */
  matchString(a, b, caseInsensitive) {
    if (caseInsensitive == null) caseInsensitive = false;
    return caseInsensitive ? a.toLowerCase() == b.toLowerCase() : a == b;
  }

  /**
   * Check to see if two strings match
   * password validat@value x
   */ // Password validata

 /**
    * Token replace
    * @param string
    * @param values []
     @returns {}
    */
     replace(string, values) {
      if (string != null) {
        for (let i = 0; i < values.length; i++) {
          string = string.replace(
            new RegExp("(\\{" + i + "\\})", "g"),
            values[i]
          );
        }
        return string;
      }
      return string;
    }
    showNotification(value, props) {
      EventRegister.emit(global.event.notificationPop, value, props);
    }
}