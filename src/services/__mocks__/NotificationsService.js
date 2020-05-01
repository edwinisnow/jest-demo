let count = 0;

export default {
  __setCount(_count) {
    count = _count;
    console.log("Log: -----> : __setCount -> count", count)
  },
  async GetNotifications() {
    console.warn("GOOD JOB! USING MOCK SERVICE");

    console.log("Log: -----> : GetNotifications -> count", count)
    return { count };
  }
}
