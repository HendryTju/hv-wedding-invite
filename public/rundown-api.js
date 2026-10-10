import { db, isEmulated } from "./firebase-config.js?v=2";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const LOCAL_RUNDOWN_KEY = "wedding_emulated_rundown_v1";

const getLocalRundown = () => localStorage.getItem(LOCAL_RUNDOWN_KEY) || null;
const saveLocalRundown = (html) => localStorage.setItem(LOCAL_RUNDOWN_KEY, html);

export async function getWeddingRundown() {
  if (isEmulated) {
    const html = getLocalRundown();
    if (html) return html;
    return null; // Signals to use initial content
  } else {
    try {
      const docRef = doc(db, "rundowns", "wedding");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().content;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching rundown:", error);
      throw error;
    }
  }
}

export async function saveWeddingRundown(htmlContent) {
  if (isEmulated) {
    saveLocalRundown(htmlContent);
    return true;
  } else {
    try {
      const docRef = doc(db, "rundowns", "wedding");
      await setDoc(docRef, {
        content: htmlContent,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      return true;
    } catch (error) {
      console.error("Error saving rundown:", error);
      throw error;
    }
  }
}
