import { SPEECH_TO_TEXT, TEXT_TO_SPEECH } from "@/constants/api-constants";
import { envConfig } from "@/config/envConfig";

export const textToSpeech = async (text: string) => {
  console.log("API key", envConfig.SARVAM_API_KEY);

  try {
    const response = await fetch(TEXT_TO_SPEECH(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Subscription-Key": envConfig.SARVAM_API_KEY,
      },
      body: JSON.stringify({
        inputs: [text],
        target_language_code: "hi-IN",
        speaker: "meera",
        pitch: 0,
        pace: 0.8,
        loudness: 1.5,
        speech_sample_rate: 8000,
        enable_preprocessing: true,
        model: "bulbul:v1",
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const speechToText = async (audio: Blob) => {
  try {
    const formData = new FormData();
    formData.append('file', audio, 'recording.wav');
    formData.append('language_code', 'hi-IN');
    formData.append('model', 'saarika:v1');

    const response = await fetch(SPEECH_TO_TEXT(), {
      method: "POST",
      headers: {
        "API-Subscription-Key": envConfig.SARVAM_API_KEY,
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
