# 📘 Student Grades Calculator

Un pequeño programa en **JavaScript** que ayuda a los profesores a calcular promedios de notas, convertir puntajes en calificaciones con letras, verificar si los estudiantes aprobaron, y generar mensajes personalizados para cada alumno.

---

## 🚀 Funcionalidades

- **Calcular promedio de la clase** a partir de un conjunto de notas.  
- **Convertir puntajes numéricos** en calificaciones de letras:  
  - `100 → A++`  
  - `90-99 → A`  
  - `80-89 → B`  
  - `70-79 → C`  
  - `60-69 → D`  
  - `0-59 → F`  
- **Verificar si un estudiante aprueba** (todas las calificaciones excepto "F").  
- **Generar mensajes personalizados** para el estudiante, mostrando su nota, calificación y si aprobó o reprobó.

---

## 📂 Estructura del código

- `getAverage(scores)` → calcula el promedio de un array de puntajes.  
- `getGrade(score)` → convierte un puntaje numérico en calificación de letra.  
- `hasPassingGrade(score)` → determina si el estudiante aprueba.  
- `studentMsg(totalScores, studentScore)` → genera el mensaje final con resultados.  

---

## 🖥️ Ejemplo de uso

```javascript
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// Class average: 71.7. Your grade: F. You failed the course.

console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// Class average: 86.6. Your grade: B. You passed the course.
````

---

## 🔧 Requisitos

* Node.js >= 14
* Git (para clonar el repositorio)

---

## 📦 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/kikecastillocolombia/GradebookApp.git

# Entrar al directorio
cd (Ubicación del proyecto)

# Ejecutar con Node
node index.js
```
