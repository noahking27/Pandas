import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    title: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class NativeSelects extends React.Component {
    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
        states: [],
        cities: [],
    };
    //state = {users: []}

    
  componentDidMount() {
    fetch('/states')
      .then(res => res.json())
    .then(states => {
          console.log('RESPONSE ', states)
        this.setState({ states })
      });

      this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
      });
  }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleStateChange = name => event => {

        // fetch(`/cities/${event.target.value}`)
        fetch(`/cities/${event.target.value}`)
            .then(res => res.json())
            .then(cities => {
                console.log('RESPONSE ', cities)
                this.setState({ cities })
            });
        console.log('EVENT ', event.target.value)
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { states } = this.state;
        const { cities } = this.state
         return (
            <div className={classes.root}>
                <h1 className={classes.title}>Start your search here!</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">Organization</InputLabel>
                    <NativeSelect
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={<Input name="age" id="age-native-helper" />}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    <FormHelperText>Search by organization name.</FormHelperText>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-native-simple"
                    >
                        State
          </InputLabel>
                    <Select
                        native
                        value={this.state.age}
                        onChange={this.handleStateChange('age')}
                        input={
                            <OutlinedInput
                                name="age"
                                labelWidth={this.state.labelWidth}
                                id="outlined-age-native-simple"
                            />
                        }
                    >
                      <option value="" />
                        {states.map(state =>
                            <option value={state.state_code}>{state.State}</option>
                        )}
                        )}
                        </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-native-simple"
                    >
                        City
          </InputLabel>
                    <Select
                        native
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={
                            <OutlinedInput
                                name="age"
                                labelWidth={this.state.labelWidth}
                                id="outlined-age-native-simple"
                            />
                        }
                    >
                            <option value="" />
                        {cities.map(city =>
                            <option value={city.county}>{cities.city}</option>
                        )}>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-native-simple"
                    >
                        Category
          </InputLabel>
                    <Select
                        native
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={
                            <OutlinedInput
                                name="age"
                                labelWidth={this.state.labelWidth}
                                id="outlined-age-native-simple"
                            />
                        }
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">Item</InputLabel>
                    <NativeSelect
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={<Input name="age" id="age-native-helper" />}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    <FormHelperText>Search by item name.</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

NativeSelects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
