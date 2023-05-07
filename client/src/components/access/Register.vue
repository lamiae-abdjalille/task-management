<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useRouter } from 'vue-router'



const router = useRouter();
const schema = yup.object({
    name: yup.string().required('you must enter your full name !'),
    email: yup.string().required().email('you must enter your email !'),
    password: yup.string().required().min(4),
    confirm_password: yup.string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
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
        <h2 class="font-bold text-2xl mb-5 text-green">Register</h2>
        <p class="text-xs my-4 text-green">get started by creating a new account</p>

        <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit"
            class="flex flex-col gap-5">
            <Field class="p-2 rounded-xl border-inherit w-full" type="name" name="name" placeholder="Full Name" />
            <ErrorMessage name="name" />
            <Field class="p-2 rounded-xl border-inherit w-full" type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
            <Field class="p-2 rounded-xl border-inherit w-full" type="password" name="password"
                placeholder="Password" />
            <ErrorMessage name="password" />
            <Field class="p-2 rounded-xl border-inherit w-full" type="password" name="confirm_password"
                placeholder="Confirm Password" />
            <ErrorMessage name="confirm_password" />

            <button class="bg-three rounded-xl text-white py-2 hover:scale-105 duration-300 submit-btn">Register</button>

        </Form>
        <div class="mt-3 text-xs flex justify-between items-center text-green">
            <div class="mt-3 text-xs flex justify-between items-center text-green">Already have an account? 
                <RouterLink to="/access/sign-in/"><button
                        class="py-2 px-5 mx-2 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
                </RouterLink>
            </div>

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