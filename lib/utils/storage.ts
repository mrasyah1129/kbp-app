
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  // Generic methods
  static async set(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Storage set error:', error);
      throw error;
    }
  }

  static async get<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  }

  static async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Storage remove error:', error);
      throw error;
    }
  }

  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Storage clear error:', error);
      throw error;
    }
  }

  // Specific methods for common use cases
  static async setAuthToken(token: string): Promise<void> {
    return this.set('auth_token', token);
  }

  static async getAuthToken(): Promise<string | null> {
    return this.get<string>('auth_token');
  }

  static async removeAuthToken(): Promise<void> {
    return this.remove('auth_token');
  }

  static async setUserData(userData: any): Promise<void> {
    return this.set('user_data', userData);
  }

  static async getUserData<T>(): Promise<T | null> {
    return this.get<T>('user_data');
  }

  static async removeUserData(): Promise<void> {
    return this.remove('user_data');
  }

  static async setAppSettings(settings: any): Promise<void> {
    return this.set('app_settings', settings);
  }

  static async getAppSettings<T>(): Promise<T | null> {
    return this.get<T>('app_settings');
  }
}
