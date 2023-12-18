<template>
  <div>
     <v-row>
      <v-col :cols="12">
        <CardTitle>Input</CardTitle>
        <Card>
          <CardBody>
            <p>Input</p>
            <div class="form-group">
              <Label>Label:</Label>
              <Input :style="{ width: '230px' }" ></Input>
            </div>
            <br />
            <br />
            <p>Checkbox</p>
            <div class="form-group">
              <Label>Label:</Label>
              <Checkbox :label="'Option 1'" />
              <Checkbox :label="'Option 2'" />
              <br/>
              <br/>
              <Checkbox :id="'chb1'" :label="'기본정보와 동일'" />
              <br/>
              <br/>
              <Checkbox
                  :id="'chb2'"
                  :label="'전체 항목을 동의합니다'"
                  :label-placement="'before'"
              />
            </div>
            <br />
            <br />
            <p>RadioGroup</p>
            <div class="form-group">
              <Label :editor-id="'rdoGrp1'">
                라디오 라벨:
              </Label>
              <RadioGroup
                :id="'rdoGrp1'"
                :layout="'horizontal'"
                :data-items="dataItems"/>
            </div>
            
          </CardBody>
        </Card>
      </v-col>
    </v-row>  
     <v-row>
      <v-col :cols="12">
        <CardTitle>Button</CardTitle>
        <Card>
          <CardBody>
            <div class="form-group">
              <Button 
                :theme-color="'primary'"
                :size="'medium'"
                :icon="'search'">
                버튼</Button>
            </div>
          </CardBody>
        </Card>
      </v-col>
    </v-row>  
     <v-row>
      <v-col :cols="12">
        <CardTitle>DropDown</CardTitle>
        <Card>
          <CardBody>
            
            <div class="form-group">
              <Label>단건 셀렉트 박스 : </Label>
              <DropDownList
                :style="{ width: '230px' }"
                :data-items="sports"
                :text-field="'text'"
                :data-item-key="'id'"
                :value="value"
                @change="handleChange"
              ></DropDownList>
              
              <Label>다건 셀렉트 박스 : </Label>
              <MultiSelect 
                  :style="{ width: '300px'}"
                  @open="onOpen"
                  @close="onClose"
                  @focus="onFocus"
                  @blur="onBlur"
                  @change="onChange"
                  @filterchange="onFilterChange"
                  :filterable="true"
                  :data-items="countries"
              ></MultiSelect>
            </div>
            
          </CardBody>
        </Card>
      </v-col>
    </v-row>  
    <v-row>
    <v-col :cols="12">
      <CardTitle>Others</CardTitle>
      <Card>
        <CardBody>
          <div class="form-group">
            <p>Tab</p>
            <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
              <template v-slot:TabOne>
                <p>Tab 1 Content</p>
              </template>
              <template v-slot:TabTwo>
                <p>Tab 2 Content</p>
              </template>
              <template v-slot:TabThree>
                <p>Tab 3 Content</p>
              </template>
            </TabStrip>
          </div>
            <br />
            <br />
          <div class="form-group">
            <p>DatePicker</p>
            <Label>특정일 선택 :</Label>
            <DatePicker
              :style="{ width: '200px' }"
              :format="'yyyy-MM-dd'"
              v-model="firstValue"
              @change="changeFirstDate"
            ></DatePicker>
            <Button v-on:click="changeFirstLeftDate">{{ left }}</Button>
            <Button v-on:click="changeFirstRightDate">{{ right }}</Button >
            <br />
            <br />
            <Label>특정주 조회 :</Label>
            <DatePicker
              :style="{ width: '200px' }"
              :format="'yyyy-MM-dd'"
              v-model="secondValue"
              @change="changeSecondDate"
              :week-number="true"
            ></DatePicker>
            <Button v-on:click="changeSecondLeftDate">{{ left }}</Button>
            <Button v-on:click="changeSecondRightDate">{{ right }}</Button>
            <Button v-on:click="changeSecondDay">일</Button>
            <Button v-on:click="changeSecondWeek">주</Button>
          </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>시간 조정 :</p>
        <label>에약 발송</label>
        <datepicker
          :style="{ width: '250px' }"
          :format="'yyyy-MM-dd hh:mm a'"
          v-model="thirdValue"
        ></datepicker>
  
        <timepicker
          :style="{ width: '100px' }"
          :format="'HH'"
          v-model="thirdValue"
          @change="handleThirdHourChange"
        />
        <label>시</label>
        <timepicker
          :style="{ width: '100px' }"
          :format="'mm'"
          v-model="thirdValue"
          @change="handleThirdMinutesChange"
        />
        <label>분</label>
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>기간 선택 :</p>
        <label>기간별</label>
        <datepicker
          :style="{ width: '130px' }"
          :format="'yyyy-MM-dd'"
          v-model="fourthStartValue"
          :max="fourthStartValue"
          @change="handleFourthStartChange"
        ></datepicker>
        <label>~</label>
        <datepicker
          :style="{ width: '130px' }"
          :format="'yyyy-MM-dd'"
          v-model="fourthEndValue"
          :min="fourthStartValue"
          @change="handleFourthEndChange"
        ></datepicker>
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
      <p>select 박스 기간 선택 :</p>
      <label>기간</label>
      <DateInput
        :style="{ width: '100px' }"
        :spinners="true"
        :value="fifthStartValue"
        :format="'yyyy'"
        @change="handleFifthStartChange"
      />
      <label>년</label>
      <DateInput
        :style="{ width: '100px' }"
        :spinners="true"
        :value="fifthStartValue"
        :format="'MM'"
        @change="handleFifthStartChange"
      />
      <label>월</label>

      ~
      <DateInput
        :style="{ width: '100px' }"
        :spinners="true"
        :value="fifthEndValue"
        :format="'yyyy'"
        @change="handleFifthEndChange"
      />
      <label>년</label>
      <DateInput
        :style="{ width: '100px' }"
        :spinners="true"
        :value="fifthEndValue"
        :format="'MM'"
        @change="handleFifthEndChange"
      />
      <label>월</label>
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>특정 년월 설정 :</p>
      <Button v-on:click="changeSetSixth">기준시점</Button>
      <DateInput
        :style="{ width: '100px' }"
        :spinners="true"
        :value="sixthValue"
        :format="'yyyy'"
        @change="changeSixthDate"
      />
      <label>년</label>
      <DateInput
        :style="{ width: '100px' }"
        :spinners="true"
        :value="sixthValue"
        :format="'MM'"
        @change="changeSixthDate"
      />
      <label>월</label>
    </div>
        </CardBody>
      </Card>
    </v-col>
  </v-row>  
</div>
  </template>
  
<script>
import '@progress/kendo-theme-default/dist/all.css';
import { Label } from "@progress/kendo-vue-labels";
import { Input, Checkbox, RadioGroup } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";
import { DropDownList, MultiSelect } from '@progress/kendo-vue-dropdowns';
import { TabStrip, Card, CardBody, CardTitle} from "@progress/kendo-vue-layout";
import { DatePicker, TimePicker } from "@progress/kendo-vue-dateinputs";
import { DateInput } from "@progress/kendo-vue-dateinputs";
  export default {
    name: "SamplePage",
    components: {
        Label,
        Button,
        Input,
        Checkbox,
        RadioGroup,
        DropDownList,
        MultiSelect,
        TabStrip,
        CardTitle,
        CardBody,
        Card,
        DatePicker,
        timepicker: TimePicker,
        DateInput
    },
    data() {
  
      return {
        successful: false,
        loading: false,
        message: "",

        //RadioGroup
        dataItems: [
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ],

      //DropDownList
      value: { text: 'Football', id: 2 },
      sports: [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 },
      ],
      countries : [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
      ],
      
      // tab
      selected: 0,
      tabs: [
        {
          title: 'Tab 1 Title',
          content: 'TabOne',
        },
        {
          title: 'Tab 2 Title',
          content: 'TabTwo',
        },
        {
          title: 'Tab 3 Title',
          content: 'TabThree',
        },
      ],

      //DatePicker
      left: "◀",
      right: "▶",
      firstValue: new Date(2017, 2, 10),
      secondValue: new Date(2017, 2, 10),
      thirdValue: new Date(2017, 2, 10, 0, 0),
      fourthStartValue: new Date(2017, 2, 10),
      fourthEndValue: new Date(2017, 3, 10),
      fifthStartValue: new Date(2017, 3),
      fifthEndValue: new Date(2017, 3),
      sixthValue: new Date(2017, 2),
      sixthFixValue: new Date(2020, 5),
      dateFormat: "day",
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    mounted() {

    },
    methods: {
      onSelect(e) {
      this.selected = e.selected;
      },
      handleChange(event) {
        this.value = event.value;
      },

      changeFirstDate(event) {
        this.firstValue = event.firstValue;
      },
      changeSecondDate(event) {
        this.secondValue = event.secondValue;
      },
  
      changeFirstLeftDate() {
        this.firstValue = new Date(
          this.firstValue.getFullYear(),
          this.firstValue.getMonth(),
          this.firstValue.getDate() - 1
        );
      },
      changeFirstRightDate() {
        this.firstValue = new Date(
          this.firstValue.getFullYear(),
          this.firstValue.getMonth(),
          this.firstValue.getDate() + 1
        );
      },
  
      changeSecondLeftDate() {
        if (this.dateFormat == "day") {
          this.secondValue = new Date(
            this.secondValue.getFullYear(),
            this.secondValue.getMonth(),
            this.secondValue.getDate() - 1
          );
        } else {
          this.secondValue = new Date(
            this.secondValue.getFullYear(),
            this.secondValue.getMonth(),
            this.secondValue.getDate() - 7
          );
        }
      },
      changeSecondRightDate() {
        if (this.dateFormat == "day") {
          this.secondValue = new Date(
            this.secondValue.getFullYear(),
            this.secondValue.getMonth(),
            this.secondValue.getDate() + 1
          );
        } else {
          this.secondValue = new Date(
            this.secondValue.getFullYear(),
            this.secondValue.getMonth(),
            this.secondValue.getDate() + 7
          );
        }
      },
      changeSecondDay() {
        this.dateFormat = "day";
      },
  
      changeSecondWeek() {
        this.dateFormat = "week";
      },
      changeSetSixth() {
        this.sixthValue = new Date(this.sixthFixValue);
      },
      handleThirdHourChange(event) {
        this.thirdValue = new Date(
          this.thirdValue.getFullYear(),
          this.thirdValue.getMonth(),
          this.thirdValue.getDate(),
          event.value.getHours(),
          this.thirdValue.getMinutes()
        );
      },
      handleThirdMinutesChange(event) {
        this.thirdValue = new Date(
          this.thirdValue.getFullYear(),
          this.thirdValue.getMonth(),
          this.thirdValue.getDate(),
          this.thirdValue.getHours(),
          event.value.getMinutes()
        );
      },
      handleFifthEndChange(event) {
      this.fifthEndValue = event.value;
    },
    handleFifthStartChange(event) {
      this.fifthStartValue = event.value;
    },
    changeSixthDate(event) {
      this.sixthValue = event.value;
    },
    },
  };
</script>
  