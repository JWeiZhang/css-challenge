<template>
  <div class="day6">
    <div class="profile">
      <div class="info">
        <div class="image"></div>
        <div class="name">JiaWei Zhang</div>
        <div class="job">Front End Engineer</div>
        <div class="button follow">follow</div>
        <div class="button message">message</div>
      </div>
      <div class="stats">
        <div class="statsblock posts">
          43
          <div class="subtitle">
            Posts
          </div>
        </div>
        <div class="statsblock likes">
          516
          <div class="subtitle">
            Likes
          </div>
        </div>
        <div class="statsblock follower">
            230
            <div class="subtitle">
                Follower
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.day6 {
  width: 400px;
  height: 400px;
  background: linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7c6754;
  .profile {
    width: 70%;
    height: 70%;
    background: #fff;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: flex;
    .info {
      width: 60%;
      height: 100%;
      .image {
        width: 80px;
        height: 80px;
        background-image: url("../assets/pic.jpg");
        background-size: contain;
        border-radius: 50%;
        margin: 20% auto 15px auto;
        transition: all linear 0.3s;
        &:hover {
          transform: scale(1.2);
        }
      }
      .name {
        font-weight: bolder;
      }
      .job {
        font-size: 0.8em;
      }
      .button {
        width: 80%;
        height: 10%;
        font-size: 0.9em;
        line-height: 2em;
        margin: 15% auto 0 auto;
        border: 1px solid #83705e;
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: bolder;
        cursor: pointer;
        transition: all linear 0.3s;
        &.message {
          margin-top: 5%;
        }
        &:hover {
          background: #7c6754;
          color: #fff;
        }
      }
    }
    .stats {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .statsblock {
        width: 100%;
        height: 33%;
        background: #f5e8df;
        padding-top: 20%;
        font-weight: bolder;
        cursor: pointer;
        transition: all linear 0.3s;
        .subtitle {
          padding-top: 0;
          font-size: 0.8em;
          font-weight: normal;
        }
        &:hover {
          background: #e1cfc2;
        }
      }
    }
  }
}
</style>
