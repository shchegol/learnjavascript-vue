<template>
  <div>
    <p>
      <img class="img-thumbnail" :src="picture" />
    </p>
    <div class="row">
      <div class="col-auto">
        <input type="file" ref="image" @change="upload" hidden />
        <button class="btn btn-default btn-block" @click="selectNewImage">Change picture</button>
      </div>
      <div class="col">
        <input type="text" class="form-control" :value="picture" readonly />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  // https://imgur.com/3pHxdoF
  // id: ddb21f832dde088
  // secret: 60f6a92a0480835d163e3089c6b1d7353bad0ee5

  export default {
    name: 'AvatarUploader',
    model: {
      prop: 'picture'
    },
    props: {
      picture: {
        type: String,
        default: "http://placehold.it/128x128"
      }
    },
    methods: {
      selectNewImage() {
        this.$refs.image.click();
      },

      setNewAvatar(picture) {
        this.$emit('input', picture);
      },

      upload() {
        const url = 'https://api.imgur.com/3/image';

        const data = new FormData();
        data.append('image', this.$refs.image.files[0]);

        const config = {
          headers: {
            'Authorization': 'Client-ID ddb21f832dde088'
          }
        };

        axios.post(url, data, config)
          .then(response => response.data)
          .then(response => {
            this.setNewAvatar(response.data.link);
            this.$refs.image.value = '';
          })
      }
    }
  }
</script>
