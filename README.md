# Next.js WhatsApp Clone

A feature-rich WhatsApp clone built using Next.js, Prisma, and Tailwind CSS. This project aims to replicate the core functionalities of WhatsApp along with video and audio communication while showcasing modern web development techniques.

---

## 🚀 Features

- **Real-time Messaging**: Send and receive messages instantly.
- **User Authentication**: Secure user sign-up and login system.
- **Group Chats**: Create and manage group conversations.
- **Media Sharing**: Share images, videos, and files.
- **Responsive Design**: Optimized for all devices.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/), [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Authentication**: Firebase Authentication
- **Real-time Communication**: Socket.IO
- **Video-Audio Communication**: Zegocloud(WebRTC)

---

## 📁 Project Structure

```
NextJs-Whatsapp-Clone
├── client          # Frontend application
│   ├── public      # Static assets
│   └── src         # Source files
│       ├── components  # Reusable components
│       ├── context     # Context API files
│       ├── pages       # Next.js pages
│       ├── styles      # Global styles (Tailwind CSS)
│       └── utils       # Helper functions
├── server          # Backend logic
│   ├── prisma      # Prisma schema and migrations
│   ├── routes      # API routes
│   ├── controllers # Request handling logic
│   ├── middlewares # Middleware functions
│   └── utils       # Server-side utilities
├── README.md       # Project documentation
└── package.json    # Project dependencies
```

---

## ⚙️ Installation and Setup

### Prerequisites

- Node.js >= 16
- PostgreSQL database

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/arjunthakur0412/NextJs-Whatsapp-Clone.git
   cd NextJs-Whatsapp-Clone
   cd server for backend
   cd client for frontend
   ```

2. Install dependencies:
   ```bash
   yarn install 
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/database_name
     PORT = 3005
     ```

4. Run database migrations:
   ```bash
   cd server
   npx prisma init
   npx prisma generate
   npx prisma db push
   npx prisma studio # for accessing prisma studio
   ```

5. Start the development servers:
   - Start the backend server:
     ```bash
     cd server
     yarn start
     ```
   - Start the frontend client:
     ```bash
     cd client
    yarn dev
     ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## 🐛 Issues

If you encounter any issues or have suggestions, please open an [issue](https://github.com/arjunthakur0412/NextJs-Whatsapp-Clone/issues).

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Author**: Arjun Thakur
- **Email**: arjunth889@gmail.com
- **GitHub**: [arjunthakur0412](https://github.com/arjunthakur0412)

