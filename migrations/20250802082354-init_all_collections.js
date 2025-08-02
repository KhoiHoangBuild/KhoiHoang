module.exports = {
  async up(db, client) {
    // 1. Tạo collection account (accounts)
    await db.createCollection('accounts');
    await db.collection('accounts').insertOne({
      email: "example@gmail.com",
      createdDate: new Date(),
      password: "hash_password",
      imgUrl: "",
      phoneNumber: "",
      address: ""
    });

    // 2. Tạo collection blog (blogs)
    await db.createCollection('blogs');
    await db.collection('blogs').insertOne({
      description: "Bài viết đầu tiên",
      createdDate: new Date(),
      like: 0,
      accountID: null // sau này thay bằng ObjectId của account thực
    });

    // 3. Tạo collection image (images)
    await db.createCollection('images');
    await db.collection('images').insertOne({
      createdDate: new Date(),
      blogID: null, // gắn ObjectId sau
      imgUrl: ""
    });

    // 4. Tạo collection comment (comments)
    await db.createCollection('comments');
    await db.collection('comments').insertOne({
      description: "",
      createdDate: new Date(),
      commentID: null,
      blogID: null,
      accountID: null
    });
  },

  async down(db, client) {
    // Rollback: xóa hết các collection khi cần undo
    await db.collection('accounts').drop();
    await db.collection('blogs').drop();
    await db.collection('images').drop();
    await db.collection('comments').drop();
  }
};
