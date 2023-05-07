<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";


import { useRouter } from 'vue-router'

const router = useRouter();

const schema = yup.object({
    
    email: yup.string().required().email('you must enter your email !'),
    password: yup.string().required().min(4)
});

async function onSubmit(values: any) {
    // Submit values to API...
    //alert(JSON.stringify(values, null, 2));
  
}
function onInvalidSubmit() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn?.classList.add("invalid");
    setTimeout(() => {
        submitBtn?.classList.remove("invalid");
    }, 1000);
}
</script>
<template>
    <!-- form -->
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-green mb-3">Login</h2>
      <p class="text-xs my-4 text-green">If you are already a member, easily log in</p>

      <Form action="" class="flex flex-col gap-4"
      @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit"
        >
        <Field value="xx@gmail.com" class="p-2 rounded-xl border" type="email" name="email" placeholder="Email"/>
        <ErrorMessage name="email" />
        <Field value="Xx@123" class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>
        <ErrorMessage name="password" />
        <button class="bg-three rounded-xl text-main py-2 hover:scale-105 duration-300 submit-btn">Login</button>
      </Form>

      <div class="mt-5 text-xs border-b border-green py-4 text-green">
        <a href="#">Forgot your password?</a>
      </div>

      <div class="mt-3 text-xs flex justify-between items-center text-green">
        <p>Don't have an account? </p>
        <RouterLink to="/access/sign-up/">
        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
        </RouterLink>
      </div>
    </div>
</template>
<style scoped>
.submit-btn.invalid {
    animation: shake 0.5s;
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px);
    }

    10% {
        transform: translate(-1px, -2px);
    }

    20% {
        transform: translate(-3px, 0px);
    }

    30% {
        transform: translate(3px, 2px);
    }

    40% {
        transform: translate(1px, -1px);
    }

    50% {
        transform: translate(-1px, 2px);
    }

    60% {
        transform: translate(-3px, 1px);
    }

    70% {
        transform: translate(3px, 1px);
    }

    80% {
        transform: translate(-1px, -1px);
    }

    90% {
        transform: translate(1px, 2px);
    }

    100% {
        transform: translate(1px, -2px);
    }
}
</style>