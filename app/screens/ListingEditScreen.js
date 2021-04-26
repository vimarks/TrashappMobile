/* @flow weak */

import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from "../components/forms";

const categories = [
  { label: "Heavy", value: 1 },
  { label: "Medium", value: 2 },
  { label: "Light", value: 3 }
];

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(1)
    .max(10000)
    .label("Title"),
  price: Yup.number()
    .required()
    .label("Price"),
  category: Yup.object()
    .required()
    .nullable()
    .label("Category"),
  description: Yup.string()
    .required()
    .label("Description")
});

function ListingEditScreen({}) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: ""
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" keyboardType="numeric" placeholder="Price" />
        <AppFormPicker
          items={categories}
          name="cateogry"
          placeholder="Category"
        />
        <AppFormField
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
