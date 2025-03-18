# Styling Guide for the website - FairShare

This document outlines the design and styling standards for the project to ensure a consistent and professional appearance throughout the website.

---

## **1. Typography**

### **Font Family**

- **Primary Font**: `Poppins`, `Inter`, sans-serif
- **Fallback Fonts**: `Arial`, `Helvetica`, `sans-serif`

### **Font Sizes**

| Element            | Font Size | Weight          |
| ------------------ | --------- | --------------- |
| Headings (H1 - H6) | H1: 32px  | Bold (700)      |
|                    | H2: 28px  | Bold (700)      |
|                    | H3: 24px  | Semi-Bold (600) |
| Body Text          | 16px      | Regular (400)   |
| Small Text         | 12px      | Regular (400)   |

### **Line Height**

- Default line height: 1.2

### **Text Colors**

- Primary Text: `#F3F3F3`
- Secondary Text: `#FFFFFF`
- Placeholder Text: `#F2F2F2`

---

## **2. Color Palette**

### **Primary Colors**

| Name           | Hex Code  | Usage                                |
| -------------- | --------- | ------------------------------------ |
| Deep Purple    | `#141627` | Background, NavBar, Dashboard Widget |
| Accent Blue    | `#4495C7` | Primary CTA, Some widgets            |
| Accent Pink    | `#FE6789` | Secondary CTA, Some widgets          |
| Accent Green   | `#4CAF50` | Success States, Positive Balances    |
| Warning Yellow | `#FFC107` | Warnings, Notifications              |
| Error Red      | `#FF5252` | Errors, Negative Balances            |

### **Neutral Colors**

| Name        | Hex Code  | Usage                      |
| ----------- | --------- | -------------------------- |
| Light Gray  | `#F5F5F5` | Backgrounds, Containers    |
| Medium Gray | `#CCCCCC` | Borders, Disabled Elements |
| Dark Gray   | `#333333` | Text, Icons                |

### **Background Colors**

| Name        | Hex Code  | Usage                                      |
| ----------- | --------- | ------------------------------------------ |
| Light White | `#F3F3F3` | Main Background                            |
| Light Gray  | `#E8E8E8` | Inactive Buttons, Input field placeholders |

---

## **3. Spacing and Layout**

### **Spacing**

- Base unit: `8px`
- Margins and Padding:
  - Small: `4px`
  - Medium: `8px`
  - Large: `16px`
  - Extra Large: `32px`

### **Container Widths**

- Mobile: `100%`
- Tablet: `720px`
- Desktop: `1024px`
- Large Desktop: `1280px`

---

## **4. Buttons**

### **Primary Buttons**

- Background: `#4495C7`
- Text Color: `#F3F3F3`
- Border Radius: `4px`
- Padding: `12px 16px`
- Hover: Darker shade of blue

### **Secondary Buttons**

- Background: `none`
- Border: `2px solid #FE6789`
- Text Color: `#F3F3F3`
- Border Radius: `4px`
- Padding: `12px 16px`
- Hover: Fill pink colour

---

## **5. Forms and Inputs**

### **Input Fields**

- Background: `#FFFFFF`
- Border: `1px solid #CCCCCC`
- Border Radius: `4px`
- Padding: `8px 12px`
- Focus State: Border changes to Primary Blue (`#1E90FF`)

### **Labels**

- Font Size: `14px`
- Color: `#333333`

### **Error States**

- Text Color: `#FF5252`
- Border Color: `#FF5252`

---

## **6. Icons and Illustrations**

- Use a consistent icon library, such as `Font Awesome` or `Iconify`.
- Icon Size: `16px` or `24px` depending on context.

---

---

## **7. Animations**

- **Hover Effects**: Subtle transitions (e.g., `0.3s ease-in-out` for color changes).
- **Loading Spinners**: Use CSS-based spinners or lightweight libraries.
- **Reveal on Scroll**: Use JS-based libraries for reveal on scroll on the home page(index.html).

---

## **8. Responsive Design (Stretch Objective)**

- Mobile-first approach.
- Breakpoints:
  - Small devices: `576px`
  - Medium devices: `768px`
  - Large devices: `992px`
  - Extra large devices: `1200px`

---

## **9. Miscellaneous Guidelines**

- Border Radius: Keep it consistent (`8px` for rounded elements).
- Shadows: Use subtle shadows for depth (`box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);`).
- Grid System: Follow a 12-column grid for layouts.

---
