module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    // Cập nhật tất cả document trong 'blogs' chưa có trường "title"
    // Với title = 50 ký tự đầu tiên của description, hoặc "Tiêu đề bài viết" nếu không có description

    const cursor = db.collection('blogs').find({ title: { $exists: false } });

    while (await cursor.hasNext()) {
      const doc = await cursor.next();
      let title = 'Tiêu đề bài viết';

      if (doc.description && typeof doc.description === 'string') {
        title = doc.description.substring(0, 50).trim();
        if (doc.description.length > 50) title += '...';
      }

      await db.collection('blogs').updateOne(
        { _id: doc._id },
        { $set: { title } }
      );

      console.log(`Updated blog _id: ${doc._id} with title: ${title}`);
    }
  },


  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    // Rollback khi cần xóa trường title đã thêm (cẩn trọng khi chạy lệnh này)
    await db.collection('blogs').updateMany(
      { title: { $exists: true } },
      { $unset: { title: "" } }
    );

    console.log(`Removed "title" field from all blogs.`);
  }
};
