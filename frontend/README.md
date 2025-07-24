
# Solus Dashboard (React + Vite + TypeScript)

Pixel-perfect dashboard UI based on the provided design.

## תיאור הפרויקט
מערכת דשבורד מודולרית, גנרית, מוכנה ל-SaaS, עם עיצוב פיקסל-פרפקט לפי צילום מסך.

### נתונים:
- **Payments** ו-**Invoices** נמשכים מ-API (service אמיתי, דמו).
- כל שאר הנתונים (גרפים, סטטיסטיקות, רשימות) – סטטיים, אך בנויים עם services ומוכנים להחלפה ל-API אמיתי.

### טכנולוגיות:
- React + Vite + TypeScript
- CSS/SCSS/Styled Components (לפי הצורך)

### מבנה הפרויקט:
- `src/components` – קומפוננטות UI
- `src/services` – שירותי נתונים (API/Mock)
- `src/pages` – דפי מערכת
- `src/types` – טיפוסים משותפים

### הרצה מקומית:
```bash
npm install
npm run dev
```
המערכת תעלה בברירת מחדל ב- http://localhost:5173

### הערות:
- ניתן להחליף בקלות את ה-mock services ל-API אמיתי לכל רכיב.
- כל הקוד מוכן להרחבה ושיתוף פעולה בצוות.

---
לשאלות/הרחבות: פנו למפתחים.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
